"use client"
import Link from 'next/link';
import React from 'react'
import { CldImage } from 'next-cloudinary'
import UseReveal from '@/app/components/effects/UseReveal'
import StyleScript from '../../styles/products.module.css'
import NoImage from './NoImage';
import StopContextMenu from './StopContextMenu';
import pageStyle from '@/app/styles/productPage.module.css'
import { useRouter } from 'next/navigation'

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

const ClientProductMap: React.FC<any> = ({ ProductData, path, alt }) => {
    const [productData] = React.useState<Props[]>(ProductData);
    const refs: React.RefObject<HTMLAnchorElement>[] = (productData?.map(() => UseReveal()) ?? []) as React.RefObject<HTMLAnchorElement>[];
    const router = useRouter();
    const handleBackToPageBtn = () => {
        try {
            router.back();
        }
        catch {
            router.push('/');
        }
    };

    return (
        <div className={StyleScript.productContainer} onContextMenu={StopContextMenu}>
            <div className={pageStyle.backToPageBtn}>
                <button onClick={handleBackToPageBtn}>back</button>
            </div>

            {productData?.map((material: Props, idx: number) => (
                <Link href={`${path}${material.id}`} ref={refs[idx]} className={StyleScript.reveal} key={idx}>
                    <div className={StyleScript.productCard} >
                        <div className={StyleScript.imageDiv}  >
                            {
                                <CldImage
                                    itemType='img'
                                    src={material.url}
                                    alt={`${alt} ${idx + 1}`}
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
                                    onError={NoImage}
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

    )
}

export default ClientProductMap