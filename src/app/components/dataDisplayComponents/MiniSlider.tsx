"use client"
import React, { useEffect, useRef, useState } from 'react';
import minisliderstyles from "../../styles/miniSlider.module.css";
import { CldImage } from 'next-cloudinary';
// import productData from "../../../public/data/miniSlider/miniSlider.json";
import Link from 'next/link';
import { fetchProductData } from '@/app/api/fetchProductData';
import NoImage from '../simplifiedComponents/NoImage';
import StopContextMenu from '../simplifiedComponents/StopContextMenu';
import { useTheme } from '../simplifiedComponents/ContextProvider';
import CardLoader from '../effects/CardLoader';
import useIntersectionObserver from '@/app/ts/useIntersectionObserver';

interface Product {
  goto: string;
  url: string;
}

function MiniSlider() {
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);
  const [productData, setProductData] = useState<Product[] | null>(null);
  const theme = useTheme();
  const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });


  useEffect(() => {
    const fetchData = async () => {
      const data = fetchProductData("miniSlider/miniSlider")
      console.log("observed miniSlider/miniSlider");
      setProductData(await data);
    }
    if (isIntersecting && !productData) fetchData();
  }, [isIntersecting])

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
        {productData ? (<>
          <button onClick={handleLeftBtn} aria-label="Previous Slide" className={minisliderstyles.leftBtn}>
            <div className={minisliderstyles.goBack1}></div>
            <div className={minisliderstyles.goBack2}></div>
          </button>
          <button onClick={handleRightBtn} aria-label="Next Slide" className={minisliderstyles.rightBtn}>
            <div className={minisliderstyles.goBack1}></div>
            <div className={minisliderstyles.goBack2}></div>
          </button>
        </>) : null}


        {!productData ? (
          <CardLoader height={100} num={10} />
        ) : (
          <div className={minisliderstyles.scrollWrap} ref={scrollWrapRef}>
            {productData?.map((content, idx) => (
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
        )}
      </div>
    </main>
  );
}

export default MiniSlider;
