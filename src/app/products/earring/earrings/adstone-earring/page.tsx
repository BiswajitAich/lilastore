import { fetchProductData } from "@/app/api/fetchProductData";
import StoneEarringClient from "./StoneEarringClient/page"

const StoneEarring = async () => {
    const productData = await fetchProductData("earring/adstone-earring")
    return (<StoneEarringClient ProductData={productData} />)
}

export default StoneEarring

export function generateMetadata() {
    return {
        title: "Stone Earring Collection"
    }
}