// "use client"
// import { Suspense, useEffect, useState } from "react";
// const Loading = dynamic(() => import("@/app/loading"), { ssr: false });
// import NecklacesTypesClient from "./NecklaceTypesClient";
// import dynamic from "next/dynamic";
// import { fetchProductData } from "@/app/api/fetchProductData";
// import useIntersectionObserver from "@/app/ts/useIntersectionObserver";

// const NecklaceTypes: React.FC = () => {
//     const [intersectionRef, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
//     const [productData, setProductData] = useState(null);

//     useEffect(() => {
//         if (isIntersecting && !productData) {
//             fetchProductData("necklace/necklaces").then(data => setProductData(data));
//             console.log("observed necklace/necklaces");

//         }
//     }, [isIntersecting]);

//     return (
//         <div ref={intersectionRef}>
//             <Suspense fallback={<Loading />}>
//                 <NecklacesTypesClient ProductData={productData} />
//             </Suspense>
//         </div>
//     )

// }

// export default NecklaceTypes




"use client"
import dynamic from "next/dynamic";
import ProductType from "@/app/reuse/Type";

const NecklacesTypesClient = dynamic(() => import("./NecklaceTypesClient"));

const NecklaceTypes = () => (
    <ProductType 
        endpoint="necklace/necklaces"
        Component={NecklacesTypesClient}
    />
);

export default NecklaceTypes;

