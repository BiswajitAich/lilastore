"use client"
import React, { useContext } from 'react'
import StyleScript from '../../styles/products.module.css'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import NoImage from './NoImage'
import StopContextMenu from './StopContextMenu'
import { Context } from './ContextProvider'

interface Props {
  price?: string
  id: number,
  url: string,
  category?: string,
  goto: string,
  description?: string,
  type?: {
    url: string
  }
}



const ProductTypesComponent: React.FC<any> = ({ ProductData, heading }) => {
  const contextValue = useContext(Context);
  if (!contextValue) {
      return null;
  }

  const { theme } = contextValue;

  return (
    <div 
      className={StyleScript.productBody} 
      onContextMenu={StopContextMenu}
      style={{ 
        backgroundColor: theme==="moon" ? "rgb(85 86 87 / 77%)" : "",
        boxShadow: theme==="moon" ? "0px 15px 25px rgb(0 0 0)" : "",
      }}
    >
      <h3>{heading}<div /></h3>
      <div className={StyleScript.productContainer}>
        {ProductData?.map((material: Props, idx: number) => (
          <Link href={material?.goto} key={idx}>
            <div className={StyleScript.productCard} 
              style={{
                backgroundColor: theme==="moon" ? "#0dffe0" : "",
              }}
            >
              <div className={StyleScript.imageDiv}
                style={{ backgroundImage: `url(${material.url}?quality=0.1)` }} >
                {
                  <CldImage
                    itemType='img'
                    src={material.url}
                    alt={`image${idx + 1}`}
                    width={400}
                    height={600}
                    loading='lazy'
                    style={{
                      borderRadius: "12px",
                      opacity: 0,
                      transition: "all 1s ease",
                    }}
                    className={StyleScript.animation}
                    onError={(e)=>NoImage(e)}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.classList.remove(StyleScript.animation);
                      target.style.opacity = "1";
                    }}
                  />
                }
              </div>
              <div className={StyleScript.design} />
              <div className={StyleScript.details}>
                <p>{material.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

  )
}
export default ProductTypesComponent