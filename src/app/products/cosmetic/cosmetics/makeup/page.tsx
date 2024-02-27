import { fetchProductData } from "@/app/api/fetchProductData";
import MakeupClient from "./CosmeticsClient/page";

const Makeup = async () => {
    const productData = await fetchProductData("cosmetic/makeup")
    return (<><MakeupClient ProductData={productData} /></>)
}
export default Makeup

export function generateMetadata() {
    return {
        title: "Makeup Collection"
    }
}