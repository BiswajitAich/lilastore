import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedEarringClient from "./OxydizedEarringClient/page";

const OxydizedEarring = async () => {
    const productData = await fetchProductData("earring/oxydized-earring")
    return (<OxydizedEarringClient ProductData={productData} />)
}
export default OxydizedEarring

export function generateMetadata() {
    return {
        title: "Oxydized Earring Collection"
    }
}