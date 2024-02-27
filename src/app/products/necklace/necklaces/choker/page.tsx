import { fetchProductData } from "@/app/api/fetchProductData";
import ChokerNecklacesClient from "./CokerNecklaceClient/page";

const ChokerNecklaces = async () => {    
    const productData = await fetchProductData("necklace/choker")
    return (<ChokerNecklacesClient ProductData={productData} />)
}
export default ChokerNecklaces

export function generateMetadata() {
    return {
        title: "Choker Necklaces Collection"
    }
}