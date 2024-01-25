"use client"
import React, { useEffect, useRef, useState } from 'react';
import minisliderstyles from "@/app/styles/miniSlider.module.css";
import { CldImage } from 'next-cloudinary';
// import productData from "../../../public/data/miniSlider/miniSlider.json";
import Link from 'next/link';

interface Product {
  goto: string;
  url: string;
}

function MiniSlider() {
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);
  const [productData, setProductData] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/miniSlider/miniSlider.json');

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }


        const data = await res.json();
        // console.log('Fetched Data:', data);
        setProductData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [])

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
    <div className={minisliderstyles.miniMain}>
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
        <div className={minisliderstyles.WaveLoaderWrap}>
          {[...Array(10)].map((_, idx) => (
            <div className={minisliderstyles.WaveLoaderDiv} key={idx} />
          ))}
        </div>
      ) : (
        <div className={minisliderstyles.scrollWrap} ref={scrollWrapRef}>
          {productData?.map((content, idx) => (
            content.url && <div className={minisliderstyles.scrollDiv} key={idx}>
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
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MiniSlider;
