"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import bannerstyles from "./../../styles/banner.module.css";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import WaveLoader from "../effects/WaveLoader";
import NoImage from "../simplifiedComponents/NoImage";
import StopContextMenu from "../simplifiedComponents/StopContextMenu";
import { useTheme } from "../simplifiedComponents/ContextProvider";
import { fetchProductData } from "@/app/api/fetchProductData";
import useIntersectionObserver from "@/app/ts/useIntersectionObserver";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

interface product {
  id?: number;
  url?: string;
  category?: string;
  description?: string;
  price?: string;
  goto?: string;
}

const Carousel: React.FC = memo(() => {
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const scrollsRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [position, setPosition] = useState(0);
  const theme = useTheme();
  const [intersectionRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [hasFetched, setHasFetched] = useState(false);
  const [carouselData, setCarouselData] = useState<product[]>([]);

  const { data, refetch, isFetching } = useQuery(
    "banners/banner",
    () => fetchProductData("banners/banner"),
    {
      enabled: false,
      staleTime: 1000 * 60 * 20,
    }
  );

  useEffect(() => {
    if (isIntersecting && !hasFetched && !isFetching && !data) {
      refetch();
      setHasFetched(true);
      console.log(`Observed banner for the first time`);
    }
  }, [isIntersecting, hasFetched, isFetching, refetch]);

  useEffect(() => {
    if (data) {
      setCarouselData(data);
    }
  }, [data]);

  useEffect(() => {
    function mousedown(e: { pageX: number }) {
      if (scrollsRef.current) {
        setIsDown(true);
        scrollsRef.current.classList.add("active");
        setStartX(e.pageX - scrollsRef.current.offsetLeft);
        setScrollLeft(scrollsRef.current.scrollLeft);
      }
    }

    function mouseleave() {
      if (scrollsRef.current) {
        setIsDown(false);
        scrollsRef.current.classList.remove("active");
      }
    }

    function mouseup() {
      if (scrollsRef.current) {
        setIsDown(false);
        scrollsRef.current.classList.remove("active");
      }
    }

    function mousemove(e: { pageX: number }) {
      if (!isDown || !scrollsRef.current || startX === null || scrollLeft === null) return;
      const x = e.pageX - scrollsRef.current.offsetLeft;
      const walk = (x - startX) * 3;
      scrollsRef.current.scrollLeft = scrollLeft - walk;
    }

    const scrolls = scrollsRef.current;

    if (scrolls) {
      scrolls.addEventListener("mousedown", mousedown);
      scrolls.addEventListener("mouseleave", mouseleave);
      window.addEventListener("mouseup", mouseup);
      scrolls.addEventListener("mousemove", mousemove);
    }

    return () => {
      if (scrolls) {
        scrolls.removeEventListener("mousedown", mousedown);
        scrolls.removeEventListener("mouseleave", mouseleave);
        window.removeEventListener("mouseup", mouseup);
        scrolls.removeEventListener("mousemove", mousemove);
      }
    };
  }, [startX, scrollLeft, isDown]);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const nextPosition = (prevPosition + 1) % carouselData.length;
        scrollToPosition(nextPosition);
        return nextPosition;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselData]);

  const scrollToPosition = (newPosition: number) => {
    const scrolls = scrollsRef.current;
    if (scrolls) {
      const element = scrolls.children[newPosition] as HTMLElement;
      scrolls.scrollTo({
        left: element?.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  function handleLeftBtn() {
    const newPosition = position - 1 < 0 ? carouselData.length - 1 : position - 1;
    scrollToPosition(newPosition);
    setPosition(newPosition);
  }

  function handleRightBtn() {
    const newPosition = (position + 1) % carouselData.length;
    scrollToPosition(newPosition);
    setPosition(newPosition);
  }
  if (data === null) return null
  return (
    <main
      className={bannerstyles.main}
      style={{
        background: theme === "moon" ? "linear-gradient(180deg,black, oklch(0 0 0 / 0.6), black)" : "",
      }}
      onContextMenu={StopContextMenu}
      ref={intersectionRef}
    >
      <div className={bannerstyles.banner} onContextMenu={StopContextMenu}>
        {isFetching ? (
          <WaveLoader />
        ) : (
          <>
            <button className={bannerstyles.leftBtn} aria-label="Previous Slide" onClick={handleLeftBtn}>
              <div className={bannerstyles.goBack1}></div>
              <div className={bannerstyles.goBack2}></div>
            </button>
            <button className={bannerstyles.rightBtn} aria-label="Next Slide" onClick={handleRightBtn}>
              <div className={bannerstyles.goBack1}></div>
              <div className={bannerstyles.goBack2}></div>
            </button>

            <div className={bannerstyles.gradient}
              style={{
                background: theme === "moon" ? "linear-gradient(0deg, darkblue, transparent)" : "",
              }}
            />

            <div className={bannerstyles.scrolls} ref={scrollsRef}>
              {carouselData?.map((content: product, idx: React.Key | null | undefined) => (
                content?.url && content?.goto && (
                  <Link href={content.goto} key={idx} style={{ height: "100%", minWidth: "100%" }}>
                    <div className={bannerstyles.scrollDiv}>
                      <div className={bannerstyles.imgs}>
                        <CldImage
                          src={content.url}
                          loading="eager"
                          priority
                          alt={`image ${content.category}`}
                          width={300}
                          height={400}
                          onError={NoImage}
                        />
                      </div>
                      <div
                        className={bannerstyles.details}
                        style={{
                          backgroundColor: theme === "moon" ? "#93744b" : "",
                        }}
                      >
                        <div>{content?.category}</div>
                        <div>
                          {content?.description &&
                            content?.description.split("\n").map((item, key) => (
                              <span key={key}>
                                {item}
                                <br />
                              </span>
                            ))}
                        </div>
                        <div>Rs {content?.price}</div>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
});

const Banner = () => (
  <QueryClientProvider client={queryClient}>
    <Carousel />
  </QueryClientProvider>
);

export default Banner;
