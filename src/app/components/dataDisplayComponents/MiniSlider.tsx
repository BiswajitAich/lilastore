"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import minisliderstyles from "../../styles/miniSlider.module.css";
import { CldImage } from 'next-cloudinary';
// import productData from "../../../public/data/miniSlider/miniSlider.json";
import Link from 'next/link';
import { fetchProductData } from '@/app/api/fetchProductData';
import NoImage from '../simplifiedComponents/NoImage';
import StopContextMenu from '../simplifiedComponents/StopContextMenu';
import { Context } from '../simplifiedComponents/ContextProvider';

interface Product {
  goto: string;
  url: string;
}

function MiniSlider() {
  const scrollWrapRef = useRef<HTMLDivElement | null>(null);
  const [productData, setProductData] = useState<Product[]>();
  const contextValue = useContext(Context);
  if (!contextValue) {
      return null;
  }

  const { theme } = contextValue;
  useEffect(() => {
    const fetchData = async () => {
      const data = fetchProductData("miniSlider/miniSlider")
      setProductData(await data);
    }
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
    <div className={minisliderstyles.miniMain} onContextMenu={StopContextMenu}
      style={{
        backgroundColor: theme==="moon" ? "darkblue" : "",
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
        <div className={minisliderstyles.WaveLoaderWrap}>
          {[...Array(10)].map((_, idx) => (
            <div className={minisliderstyles.WaveLoaderDiv} key={idx} />
          ))}
        </div>
      ) : (
        <div className={minisliderstyles.scrollWrap} ref={scrollWrapRef}>
          {productData?.map((content, idx) => (
            content.url && <div className={minisliderstyles.scrollDiv} key={idx}
            style={{
              boxShadow: theme==="moon" ? "2px 2px 5px black, -2px -2px 5px black" : "",
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
  );
}

export default MiniSlider;
