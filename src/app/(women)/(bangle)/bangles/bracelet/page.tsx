import { fetchProductData } from "@/app/api/fetchProductData"
import BeaceletClient from "./BraceletClient/page"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider"

const Bracelet = async () => {
    const productData = await fetchProductData("bangles/bracelet")
    return (
        <ContextProvider>
            <BeaceletClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Bracelet

export function generateMetadata() {
    return {
        title: "Bracelet Collection"
    }
}