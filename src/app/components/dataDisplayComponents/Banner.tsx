"use client"
import React, { useEffect, useRef, useState } from 'react'
import bannerstyles from './../../styles/banner.module.css'
// import bannerContent from "../../../public/data/banner/banner.json"
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import WaveLoader from '../effects/WaveLoader'
import NoImage from '../simplifiedComponents/NoImage'

interface product {
  id?: number,
  url?: string,
  category?: string,
  description?: string,
  price?: string,
  goto?: string,
}


const Banner: React.FC = () => {
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const scrollsRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [position, setPosition] = useState(0);
  const [displayDiv, setDisplayDiv] = useState<product[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (displayDiv) return;
        const control = new AbortController();
        const signal = control.signal
        const response = await fetch('https://lilastore007-default-rtdb.firebaseio.com/banner/.json', {
          signal,
          // cache: "force-cache"
            next: { revalidate: 3600}
        });

        const data = await response.json();
        setDisplayDiv(data)
        // console.log(data);
      } catch (error) {
        console.error('Error:', error);
        setDisplayDiv([])
      }
    };

    fetchData();

  }, [displayDiv])

  useEffect(() => {

    function mousedown(e: { pageX: number; }) {
      if (scrolls) {
        setIsDown(true);
        scrolls.classList.add("active");
        setStartX(e.pageX - scrolls.offsetLeft);
        setScrollLeft(scrolls.scrollLeft)
      }
    }
    function mouseleave() {
      if (scrolls) {
        setIsDown(false);
        scrolls.classList.remove("active");
      }
    }
    function mouseup() {
      if (scrolls) {
        setIsDown(false);
        scrolls.classList.remove("active");
      }
    }
    function mousemove(e: { pageX: number; }) {
      if (scrolls) {
        if (!isDown) return;
        const x = e.pageX - scrollsRef.current.offsetLeft;

        if (startX !== null && scrollLeft !== null) {
          const walk = (x - startX) * 3;
          scrollsRef.current.scrollLeft = scrollLeft - walk;
        }
      }
    }

    const scrolls = scrollsRef.current;

    if (scrolls) {
      scrolls.addEventListener("scroll", () => {
        const scrollLeft = scrolls.scrollLeft;
        setPosition(Math.round(scrollLeft / scrolls.clientWidth));
      });
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

  }, [startX, scrollLeft, scrollsRef, isDown]);


  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayDiv((prev) => {
        if (!prev) return;
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 5000);
    return () => clearInterval(interval);
  });


  function handleLeftBtn() {
    const scrolls = scrollsRef.current;
    const screenWidth = window.innerWidth;

    if (scrolls) {
      // Decrease the position
      const newPosition = position - 1 < 0 ? scrolls.children.length - 1 : position - 1;
      setPosition(newPosition);

      if (screenWidth > 300) {
        const element = scrolls.children[newPosition] as HTMLElement;
        scrolls.scrollTo({
          left: element.offsetLeft,
          behavior: 'smooth',
        });
      } else return;


    }

  }

  function handleRightBtn() {
    const scrolls = scrollsRef.current;
    const screenWidth = window.innerWidth;
    if (scrolls) {
      // Increase the position
      const newPosition = (position + 1) % scrolls.children.length;
      setPosition(newPosition);

      if (screenWidth > 300) {
        const element = scrolls.children[newPosition] as HTMLElement;
        scrolls.scrollTo({
          left: element?.offsetLeft,
          behavior: 'smooth',
        });
      } else return;
    }
  }



  return (
    <div className={bannerstyles.banner}>
      {displayDiv ? (<>

        {displayDiv ? (
          <>
            <button className={bannerstyles.leftBtn} aria-label="Previous Slide" onClick={handleLeftBtn}>
              <div className={bannerstyles.goBack1}></div>
              <div className={bannerstyles.goBack2}></div>
            </button>
            <button className={bannerstyles.rightBtn} aria-label="Next Slide" onClick={handleRightBtn}>
              <div className={bannerstyles.goBack1}></div>
              <div className={bannerstyles.goBack2}></div>
            </button>
          </>
        ) : null}



        <div className={bannerstyles.gradient} />

        <div className={bannerstyles.scrolls} ref={scrollsRef}>
          {!displayDiv ? (<WaveLoader />) : (<>
            {displayDiv?.map((content, idx) => (
              content?.url && content?.goto && <Link href={content.goto} key={idx} style={{ height: "100%", minWidth: "100%" }}>
                <div className={bannerstyles.scrollDiv}>
                  <div className={bannerstyles.imgs}>
                    <CldImage
                      src={content?.url}
                      loading='eager'
                      priority
                      alt={`imade${idx + 1}`}
                      width={300}
                      height={400}
                      onError={(e) =>NoImage(e)}
                    />
                  </div>
                  <div className={bannerstyles.details}>
                    <div>{content?.category}</div>
                    <div>{content?.description && content?.description.split('\n').map((item, key) => { return <span key={key}>{item}<br /></span> })}</div>
                    <div>Rs {content?.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </>)}
        </div>
      </>) : null}
    </div>
  )
}

export default Banner;