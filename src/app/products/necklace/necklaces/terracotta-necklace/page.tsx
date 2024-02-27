import { fetchProductData } from "@/app/api/fetchProductData";
import TerracottaNecklacesClient from "./TerracottaNecklace/page";

const TerracottaNecklaces = async () => {    
    const productData = await fetchProductData("necklace/terracotta-necklace")
    return (<TerracottaNecklacesClient ProductData={productData} />)
}
export default TerracottaNecklaces

export function generateMetadata() {
    return {
        title: "Terracotta Necklaces Collection"
    }
}