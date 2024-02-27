import { fetchProductData } from "@/app/api/fetchProductData";
import FancyNecklacesClient from "./FancyNacklaceClient/page";

const FancyNecklaces = async () => {
    const productData = await fetchProductData("necklace/fancy-necklace")
    return (<FancyNecklacesClient ProductData={productData} />)
}
export default FancyNecklaces

export function generateMetadata() {
    return {
        title: "Fancy Necklaces Collection"
    }
}