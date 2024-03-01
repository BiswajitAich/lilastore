import { Suspense } from "react";
import Loading from "../../loading";
import NecklacesTypesClient from "./NecklaceTypesClient";
const fetchProductsData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}necklace/necklaces.json`, {
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
const NecklaceTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<>
        <Suspense fallback={<Loading />}>
            <NecklacesTypesClient ProductData={productData} />
        </Suspense>
    </>)

}

export default NecklaceTypes