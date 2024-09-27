import { fetchProductData } from "@/app/api/fetchProductData";
import KamarbandClient from "./KamarbandClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Kamarband = async () => {
    const productData = await fetchProductData("otherproducts/kamarband")
    return (
    <ContextProvider>
        <KamarbandClient ProductData={productData} />
    </ContextProvider>
    )
}
export default Kamarband

export function generateMetadata() {
    return {
        title: "Kamarband Collection"
    }
}