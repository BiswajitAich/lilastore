// "use client"
// import React, { Suspense, useState, useEffect } from "react"
// import BangleTypesClient from "./BangleTypesClient"
// import dynamic from "next/dynamic";
// import useIntersectionObserver from "@/app/ts/useIntersectionObserver"; 
// import { fetchProductData } from "@/app/api/fetchProductData";

// const Loading = dynamic(() => import("@/app/loading"), { ssr: false })

// const BangleTypes: React.FC = () => {
//     const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         if (isIntersecting && !productData) {
//             fetchProductData("bangles/bangle").then(data => setProductData(data));
//             console.log("observed");
            
//         }
//     }, [isIntersecting]);

//     return (
//         <div ref={intersectionRef}>
//             <Suspense fallback={<Loading />}>
//                 <BangleTypesClient ProductData={productData} />
//             </Suspense>
//         </div>
//     )
// }

// export default BangleTypes;



"use client"
import dynamic from "next/dynamic";
import ProductType from "@/app/reuse/Type";

const BangleTypesClient = dynamic(() => import("./BangleTypesClient"));

const BangleTypes = () => (
    <ProductType 
        endpoint="bangles/bangle"
        Component={BangleTypesClient}
    />
);

export default BangleTypes;
