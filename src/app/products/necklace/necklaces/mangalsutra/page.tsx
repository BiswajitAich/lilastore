"use client"
import React from 'react'
import productData from '../../../../../../public/data/necklace/mangalsutra.json'
import { CldImage } from 'next-cloudinary'
import StyleScript from '../../../../styles/products.module.css'
import Link from 'next/link'
const MangalsutraNecklaces: React.FC = () => {
    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Mangalsutra Collection<div /></h3>
                <div className={StyleScript.productContainer}>
                    {productData.map((material, idx) => (
                        <Link href={`/products/necklace/necklaces/mangalsutra/${material.id}`} key={idx}>
                            <div className={StyleScript.productCard} >
                                <div className={StyleScript.imageDiv}  >
                                    {
                                        <CldImage
                                            itemType='img'
                                            src={material.url}
                                            alt={`Mangalsutra ${idx + 1}`}
                                            width={400}
                                            height={600}
                                            loading='lazy'
                                            style={{
                                                borderRadius: "12px",
                                            }}
                                            onLoad={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                    target.classList.remove(StyleScript.animation);
                                                    target.style.opacity = "1";
                                            }}
                                            className={StyleScript.animation}
                                        />
                                    }
                                </div>
                                <div className={StyleScript.design}/>
                                <div className={StyleScript.details}>
                                    <p style={{
                                        fontWeight: "bold",
                                        color: "green"
                                    }}>Rs {material.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MangalsutraNecklaces