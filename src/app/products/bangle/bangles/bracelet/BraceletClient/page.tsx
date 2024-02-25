"use client"
import React from 'react'
// import productData from '../../../../../../public/data/bangle/bracelet.json'
import NotFound from '@/app/not-found'
import { CldImage } from 'next-cloudinary'
import StyleScript from '../../../../../styles/products.module.css'
import Link from 'next/link'
import UseReveal from '@/app/components/effects/UseReveal'

interface BeaceletClientProps {
    id: number,
    url: string,
    category: string,
    goto: string,
    price: string,
}

const BeaceletClient: React.FC<any> = ({ ProductData }) => {
    const [productData] = React.useState<BeaceletClientProps[]>(ProductData);
    const refs: React.RefObject<HTMLAnchorElement>[] = (productData?.map(() => UseReveal()) ?? []) as React.RefObject<HTMLAnchorElement>[];



    if (!productData) return <NotFound />

    return (
        <div className={StyleScript.body} >
            <div className={StyleScript.productBody}>
                <h3>Bracelet Collection<div /></h3>
                <div className={StyleScript.productContainer}>
                    {productData?.map((material: any, idx: any) => (
                        <Link href={`/products/bangle/bangles/bracelet/${material.id}`} ref={refs[idx]} className={StyleScript.reveal} key={idx}>
                            <div className={StyleScript.productCard} >
                                <div className={StyleScript.imageDiv}  >
                                    {
                                        <CldImage
                                            itemType='img'
                                            src={material.url}
                                            alt={`Bracelet ${material.id}`}
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
                                <div className={StyleScript.design} />
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

export default BeaceletClient