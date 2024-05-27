import React, { Suspense } from "react"
const Loading = dynamic(()=> import("@/app/loading"),{ssr: false})
import MenProductTypesClient from "./MenProductTypesClient";
import dynamic from "next/dynamic";
const api = process.env.NEXT_PUBLIC_API;

const fetchProductsData = async () => {
    try {
        const path = "menProducts/menProducts.json";
        let res: Response;
        if (api?.startsWith("http://")) {
            res = await fetch(`${api}?fetchData=${path}`, {
                cache: 'no-cache'
            });
        } else {
            res = await fetch(`${api}${path}`, {
                // cache: "force-cache"
                next: { revalidate: 3600 }
            })
        }
        if (res.ok) {
            const data = await res.json()
            // console.log("static data fetched:", data)
            return data;
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

const MenProductTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<>
        <Suspense fallback={<Loading />}>
            <MenProductTypesClient ProductData={productData} />
        </Suspense>
    </>)
}

export default MenProductTypes