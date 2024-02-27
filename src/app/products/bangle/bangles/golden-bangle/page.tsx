import { fetchProductData } from "@/app/api/fetchProductData";
import GlodenBangleClient from "./GoldenBangleClient/page";   

const GoldenBangle = async () => {
    const productData = await fetchProductData("bangle/golden-bangle")
    return (<GlodenBangleClient ProductData={productData} />)
}
export default GoldenBangle

export function generateMetadata() {
    return {
        title: "Golden Bangle Collection"
    }
}