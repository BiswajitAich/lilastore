"use client"
import React from 'react'
import productData from '../../../../public/data/otherproduct/otherproduct.json'
import { CldImage } from 'next-cloudinary'
import StyleScript from '../../../app/styles/products.module.css'
import Link from 'next/link'
const OtherProduct: React.FC = () => {

    return (

        <div className={StyleScript.productBody}>
            <h3>Other Collection<div /></h3>
            <div className={StyleScript.productContainer}>
                {productData.map((material, idx) => (
                    <Link href={material.goto} key={idx}>
                        <div className={StyleScript.productCard} >
                            <div className={StyleScript.imageDiv} 
                            style={{backgroundImage: `url(${material.url}?quality=0.1)`}} >
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
                                    />
                                }
                            </div>
                            <div className={StyleScript.design}/>
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

export default OtherProduct