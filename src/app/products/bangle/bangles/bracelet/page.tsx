import { fetchProductData } from "@/app/api/fetchProductData"
import BeaceletClient from "./BraceletClient/page"

const Bracelet = async () => {
    const productData = await fetchProductData("bangle/bracelet")
    return (<><BeaceletClient ProductData={productData} /></>)
}
export default Bracelet

export function generateMetadata() {
    return {
        title: "Bracelet Collection"
    }
}