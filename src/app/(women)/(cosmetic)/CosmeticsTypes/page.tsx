import { Suspense } from "react";
import Loading from "@/app/loading";import CosmeticsTypesClient from "./CosmeticsTypesClient";
const api = process.env.NEXT_PUBLIC_API;
const fetchProductsData = async () => {
    try {
        const path = "cosmetic/cosmetic.json";
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
const CosmeticsTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<>
        <Suspense fallback={<Loading />}>
            <CosmeticsTypesClient ProductData={productData} />
        </Suspense>
    </>)

}

export default CosmeticsTypes