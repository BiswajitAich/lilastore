"use client"
import React, { Suspense, useState, useEffect } from "react"
import BangleTypesClient from "./BangleTypesClient"
import dynamic from "next/dynamic";
import useIntersectionObserver from "@/app/ts/useIntersectionObserver"; // Import the hook
import { fetchProductData } from "@/app/api/fetchProductData";

const Loading = dynamic(() => import("@/app/loading"), { ssr: false })
// const api = process.env.NEXT_PUBLIC_API;

// const fetchProductsData = async () => {
//     try {
//         const path = "bangle/bangle.json";
//         let res: Response;
//         if (api?.startsWith("http://")) {
//             res = await fetch(`${api}?fetchData=${path}`, {
//                 cache: 'no-cache'
//             });
//         } else {
//             res = await fetch(`${api}${path}`, {
//                 // cache: "force-cache"
//                 next: { revalidate: 3600 }
//             });
//         }
//         if (res.ok) {
//             const data = await res.json();
//             return data;
//         } else {
//             return null;
//         }
//     } catch (error) {
//         return null;
//     }
// }

const BangleTypes: React.FC = () => {
    const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        if (isIntersecting && !productData) {
            fetchProductData("bangle/bangle").then(data => setProductData(data));
            console.log("observed");
            
        }
    }, [isIntersecting]);

    return (
        <div ref={intersectionRef}>
            <Suspense fallback={<Loading />}>
                <BangleTypesClient ProductData={productData} />
            </Suspense>
        </div>
    )
}

export default BangleTypes;
