"use client"
import React from 'react'
import StyleScript from '../../styles/products.module.css'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import NoImage from './NoImage'
import StopContextMenu from './StopContextMenu'

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
  return (
    <div className={StyleScript.productBody} onContextMenu={StopContextMenu}>
      <h3>{heading}<div /></h3>
      <div className={StyleScript.productContainer}>
        {ProductData?.map((material: Props, idx: number) => (
          <Link href={material?.goto} key={idx}>
            <div className={StyleScript.productCard} >
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
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.classList.remove(StyleScript.animation);
                      target.style.opacity = "1";
                    }}
                    onError={NoImage}
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