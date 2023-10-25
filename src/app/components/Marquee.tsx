"use client"
import { useEffect, useState } from "react";
import style from "./../styles/marquee.module.css";

export const Marquee: React.FC = () => {
  const data = [
    "* Elevate your style with jewelry that speaks your uniqueness. *" ,
    "* Our jewelry: Where affordability meets luxury. *",
    "* Discover the magic of elegance in every piece you wear. *",
    "* Embrace timeless beauty, one piece at a time. *",
    "* Let your inner radiance shine through our exquisite jewelry. *",
    "* Because you deserve jewelry as exceptional as you are. *",
    "* Your perfect accessory is just a click away. *",
    "* Every piece, a symbol of grace and individuality. *",
    "* Turn moments into memories with our stunning jewelry. *",
    "* Explore, choose, and make every day a special occasion. *"
  ]
  const [index, setIndex]= useState(0);

  const nextElement = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(()=>{
    const interval = setInterval(nextElement, 20000); 
    return () => clearInterval(interval);
  },[])

  const getTextColor = (index: number) => {
    if (index === 0 || index === 3) {
      return '#a29bfe '; 
    } else if (index === 1 || index === 4) {
      return '#55efc4'; 
    } else if (index === 2 || index === 5) {
      return '#3498db'; 
    } else {
      return '#ffeaa7 '; 
    }
  };

  return (
    <div className={style.marqueeBody}>
        <div className={style.marqueeText}>
          <p style={{ color: getTextColor(index) }}>{data[index]}</p>
        </div>
    </div>
  );
};
