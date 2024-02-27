import { fetchProductData } from "@/app/api/fetchProductData";
import KundanNecklacesClient from "./KundanNecklaceClient/page";

const KundanNecklaces = async () => {
    const productData = await fetchProductData("necklace/kundan-necklace")
    return (<KundanNecklacesClient ProductData={productData} />)
}
export default KundanNecklaces

export function generateMetadata() {
    return {
        title: "Kundan Necklaces Collection"
    }
}