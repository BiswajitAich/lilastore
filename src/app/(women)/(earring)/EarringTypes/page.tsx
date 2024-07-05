"use client"
import { Suspense, useEffect, useState } from "react";
const Loading = dynamic(()=> import("@/app/loading"),{ssr: false});import EarringTypesClient from "./EarringTypesClient";
import dynamic from "next/dynamic";
import { fetchProductData } from "@/app/api/fetchProductData";
import useIntersectionObserver from "@/app/ts/useIntersectionObserver";
// const api = process.env.NEXT_PUBLIC_API;
// const fetchProductsData = async () => {
//     try {
//         const path = "earring/earring.json";
//         let res: Response;
//         if (api?.startsWith("http://")) {
//             res = await fetch(`${api}?fetchData=${path}`,{
//                 cache: 'no-cache'
//             });
//         } else {
//             res = await fetch(`${api}${path}`, {
//                 // cache: "force-cache"
//                 next: { revalidate: 3600 }
//             })
//         }
//         if (res.ok) {
//             const data = await res.json()
//             // console.log("static data fetched:", data)
//             return data;
//         } else {
//             return null
//         }
//     } catch (error) {
//         return null
//     }
// }
const EarringTypes: React.FC = () => {
    const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        if (isIntersecting && !productData) {
            fetchProductData("earring/earring").then(data => setProductData(data));
            console.log("observed earring/earring");
            
        }
    }, [isIntersecting]);

    return (
        <div ref={intersectionRef}>
        <Suspense fallback={<Loading />}>
            <EarringTypesClient ProductData={productData} />
        </Suspense>
    </div>)

}

export default EarringTypes