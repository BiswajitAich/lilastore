import { fetchProductData } from "@/app/api/fetchProductData";
import FancyEarringClient from "./FancyEarringClient/page";

const StoneEarring = async () => {  
    const productData = await fetchProductData("earring/fancy-earring")
    return (<FancyEarringClient ProductData={productData} />)
}
export default StoneEarring

export function generateMetadata() {
    return {
        title: "Fancy Earring Collection"
    }
}