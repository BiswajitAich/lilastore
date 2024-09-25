"use client"
import React, { memo, useEffect, useRef, useState } from 'react';
import minisliderstyles from "../../styles/miniSlider.module.css";
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { fetchProductData } from '@/app/api/fetchProductData';
import NoImage from '../simplifiedComponents/NoImage';
import StopContextMenu from '../simplifiedComponents/StopContextMenu';
import { useTheme } from '../simplifiedComponents/ContextProvider';
import useIntersectionObserver from '@/app/ts/useIntersectionObserver';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import MiniCardLoader from '../effects/MiniCardLoader';
const queryClient = new QueryClient();

interface Product {
  goto: string;
  url: string;
}

const MiniSliderCarousel = memo(() => {
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [hasFetched, setHasFetched] = useState(false);

  const { data, refetch, isFetching } = useQuery(
    "miniSlider/miniSlider",
    () => fetchProductData("miniSlider/miniSlider"),
    {
      enabled: false,
      staleTime: 1000 * 60 * 20,
    }
  );


  useEffect(() => {
    if (isIntersecting && !hasFetched && !isFetching && !data) {
      refetch();
      setHasFetched(true);
      console.log(`Observed mini slider for the first time`);
    }
  }, [isIntersecting, hasFetched, isFetching, refetch]);


  const handleRightBtn = () => {
    if (scrollWrapRef.current) {
      scrollWrapRef.current.scrollLeft += 100;
    }
  };

  const handleLeftBtn = () => {
    if (scrollWrapRef.current) {
      scrollWrapRef.current.scrollLeft -= 100;
    }
  };
  if (isFetching) return <MiniCardLoader />
  if (!data && hasFetched && !isFetching) return null;
  return (
      <main className={minisliderstyles.main}
        style={{
          background: theme === "moon" ? "linear-gradient(180deg, transparent, black)" : "",
        }}
        onContextMenu={StopContextMenu}
        ref={intersectionRef}
      >
        <div className={minisliderstyles.miniMain} onContextMenu={StopContextMenu}
          style={{
            backgroundColor: theme === "moon" ? "darkblue" : "",
          }}
        >
          <button onClick={handleLeftBtn} aria-label="Previous Slide" className={minisliderstyles.leftBtn}>
            <div className={minisliderstyles.goBack1}></div>
            <div className={minisliderstyles.goBack2}></div>
          </button>
          <button onClick={handleRightBtn} aria-label="Next Slide" className={minisliderstyles.rightBtn}>
            <div className={minisliderstyles.goBack1}></div>
            <div className={minisliderstyles.goBack2}></div>
          </button>

          <div className={minisliderstyles.scrollWrap} ref={scrollWrapRef}>
            {data?.map((content: Product, idx: number) => (
              content.url && <div className={minisliderstyles.scrollDiv} key={idx}
                style={{
                  boxShadow: theme === "moon" ? "2px 2px 5px black, -2px -2px 5px black" : "",
                }}
              >
                <Link href={content.goto} >
                  <CldImage
                    src={content.url}
                    loading='lazy'
                    width={400}
                    height={600}
                    alt={`image${idx + 1}`}
                    style={{
                      borderRadius: "12px",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onError={(e) => NoImage(e)}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
  );
})

const MiniSlider = () => (
  <QueryClientProvider client={queryClient}>
    <MiniSliderCarousel />
  </QueryClientProvider>
);

export default MiniSlider;
