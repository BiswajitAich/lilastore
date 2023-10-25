"use client"
import React, { useRef } from 'react';
import minisliderstyles from "@/app/styles/miniSlider.module.css";
import { CldImage } from 'next-cloudinary';
import productData from "../../../public/data/miniSlider/miniSlider.json";
import Link from 'next/link';

function MiniSlider() {
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);


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
      <button onClick={handleLeftBtn} aria-label="Previous Slide" className={minisliderstyles.leftBtn}>
        <div className={minisliderstyles.goBack1}></div>
        <div className={minisliderstyles.goBack2}></div>
      </button>
      <button onClick={handleRightBtn} aria-label="Next Slide" className={minisliderstyles.rightBtn}>
        <div className={minisliderstyles.goBack1}></div>
        <div className={minisliderstyles.goBack2}></div>
      </button>
      <div className={minisliderstyles.scrollWrap} ref={scrollWrapRef}>
        {productData.map((content, idx) => (
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
    </div>
  );
}

export default MiniSlider;
