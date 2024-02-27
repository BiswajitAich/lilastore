import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedBangleClient from "./OxydizedBangle"

const OxydizedBangle = async () => {
    const productData = await fetchProductData("bangle/oxydized-bangle")
    return (<OxydizedBangleClient ProductData={productData} />)
}
export default OxydizedBangle

export function generateMetadata() {
    return {
        title: "Oxydized Bangle Collection"
    }
}