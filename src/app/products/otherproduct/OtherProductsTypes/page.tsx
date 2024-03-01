import { Suspense } from "react";
import Loading from "../../loading";
import OtherProductsTypesClient from "./OtherProductsTypesClient";
const fetchProductsData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}otherproduct/otherproduct.json`, {
            // cache: "force-cache"
            next: { revalidate: 3600}
        })
        if (res.ok) {
            const data = await res.json()
            console.log("static data fetched:", data)
            return data;
        }else{
            return null
        }
    } catch (error) {
        return null
    }
}
const OtherProductsTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<>
        <Suspense fallback={<Loading />}>
            <OtherProductsTypesClient ProductData={productData} />
        </Suspense>
    </>)

}

export default OtherProductsTypes