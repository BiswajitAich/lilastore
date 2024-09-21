// "use client"
// import { Suspense, useEffect, useState } from "react";
// const Loading = dynamic(()=> import("@/app/loading") );
// import EarringTypesClient from "./EarringTypesClient";
// import dynamic from "next/dynamic";
// import { fetchProductData } from "@/app/api/fetchProductData";
// import useIntersectionObserver from "@/app/ts/useIntersectionObserver";

// const EarringTypes: React.FC = () => {
//     const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         if (isIntersecting && !productData) {
//             fetchProductData("earring/earring").then(data => setProductData(data));
//             console.log("observed earring/earring");
            
//         }
//     }, [isIntersecting]);

//     return (
//         <div ref={intersectionRef}>
//         <Suspense fallback={<Loading />}>
//             <EarringTypesClient ProductData={productData} />
//         </Suspense>
//     </div>)

// }

// export default EarringTypes


"use client"
import dynamic from "next/dynamic";
import ProductType from "@/app/reuse/Type";

const EarringTypesClient = dynamic(() => import("./EarringTypesClient"));

const NecklaceTypes = () => (
    <ProductType 
        endpoint="earring/earring"
        Component={EarringTypesClient}
    />
);

export default NecklaceTypes;
