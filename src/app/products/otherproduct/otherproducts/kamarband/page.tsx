import { fetchProductData } from "@/app/api/fetchProductData";
import KamarbandClient from "./KamarbandClient/page";

const Kamarband = async () => {
    const productData = await fetchProductData("otherproduct/kamarband")
    return (<KamarbandClient ProductData={productData} />)
}
export default Kamarband

export function generateMetadata() {
    return {
        title: "Kamarband Collection"
    }
}