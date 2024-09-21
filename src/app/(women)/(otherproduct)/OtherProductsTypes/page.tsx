// "use client"
// import { Suspense, useEffect, useState } from "react";
// const Loading = dynamic(() => import("@/app/loading"), { ssr: false }); 
// import OtherProductsTypesClient from "./OtherProductsTypesClient";
// import dynamic from "next/dynamic";
// import { fetchProductData } from "@/app/api/fetchProductData";
// import useIntersectionObserver from "@/app/ts/useIntersectionObserver";

// const OtherProductsTypes: React.FC = () => {
//     const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         if (isIntersecting && !productData) {
//             fetchProductData("otherproduct/otherproduct").then(data => setProductData(data));
//             console.log("observed otherproduct/otherproduct");
//         }
//     }, [isIntersecting]);

//     return (
//         <div ref={intersectionRef}>
//             <Suspense fallback={<Loading />}>
//                 <OtherProductsTypesClient ProductData={productData} />
//             </Suspense>
//         </div>
//         )

// }

// export default OtherProductsTypes



"use client"
import dynamic from "next/dynamic";
import ProductType from "@/app/reuse/Type";

const OtherProductsTypesClient = dynamic(() => import("./OtherProductsTypesClient"));

const OtherProductsTypes = () => (
    <ProductType 
        endpoint="otherproduct/otherproduct"
        Component={OtherProductsTypesClient}
    />
);

export default OtherProductsTypes;