import { fetchProductData } from "@/app/api/fetchProductData";
import RingClient from "./RingClient/page";

const Ring = async () => {
    const productData = await fetchProductData("otherproduct/ring")
    return (<RingClient ProductData={productData} />)
}
export default Ring

export function generateMetadata() {
    return {
        title: "Ring Collection"
    }
}