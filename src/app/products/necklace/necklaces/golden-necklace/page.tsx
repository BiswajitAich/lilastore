import { fetchProductData } from "@/app/api/fetchProductData";
import GoldenNecklacesClient from "./GoldenNecklaceClient/page";

const GoldenNecklaces = async () => {
    const productData = await fetchProductData("necklace/golden-necklace")
    return (<GoldenNecklacesClient ProductData={productData} />)
}
export default GoldenNecklaces

export function generateMetadata() {
    return {
        title: "Golden Necklaces Collection"
    }
}