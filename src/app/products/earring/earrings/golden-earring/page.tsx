import { fetchProductData } from "@/app/api/fetchProductData";
import GoldenEarringClient from "./GoldenEarringClient/page";

const GoldenEarring = async () => {
    const productData = await fetchProductData("earring/golden-earring")
    return (<GoldenEarringClient ProductData={productData} />)
}
export default GoldenEarring

export function generateMetadata() {
    return {
        title: "Golden Earring Collection"
    }
}