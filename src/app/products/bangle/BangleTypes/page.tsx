import React, { Suspense } from "react"
import BangleTypesClient from "./BangleTypesClient"
import Loading from "@/app/loading"

const fetchProductsData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}bangle/bangle.json`, {
            // cache: "force-cache"
            next: { revalidate: 3600 }
        })
        if (res.ok) {
            const data = await res.json()
            console.log("static data fetched:", data)
            return data;
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

const BangleTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<>
        <Suspense fallback={<Loading />}>
            <BangleTypesClient ProductData={productData} />
        </Suspense>
    </>)
}

export default BangleTypes