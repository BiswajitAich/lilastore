// "use client"
// import { Suspense, useEffect, useState } from "react";
// const Loading = dynamic(() => import("@/app/loading"), { ssr: false }); 
// import CosmeticsTypesClient from "./CosmeticsTypesClient";
// import dynamic from "next/dynamic";
// import { fetchProductData } from "@/app/api/fetchProductData";
// import useIntersectionObserver from "@/app/ts/useIntersectionObserver";

// const CosmeticsTypes: React.FC = () => {
//     const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         if (isIntersecting && !productData) {
//             fetchProductData("cosmetic/cosmetic").then(data => setProductData(data));
//             console.log("observed cosmetic/cosmetic");
//         }
//     }, [isIntersecting]);
//     return (
//         <div ref={intersectionRef}>
//             <Suspense fallback={<Loading />}>
//                 <CosmeticsTypesClient ProductData={productData} />
//             </Suspense>
//         </div>
//     )

// }

// export default CosmeticsTypes





"use client"
import dynamic from "next/dynamic";
import ProductType from "@/app/reuse/Type";

const CosmeticsTypesClient = dynamic(() => import("./CosmeticsTypesClient"));

const CosmeticsTypes = () => (
    <ProductType 
        endpoint="cosmetic/cosmetic"
        Component={CosmeticsTypesClient}
    />
);

export default CosmeticsTypes;
