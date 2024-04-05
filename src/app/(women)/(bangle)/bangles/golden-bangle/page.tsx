import { fetchProductData } from "@/app/api/fetchProductData";
import GlodenBangleClient from "./GoldenBangleClient/page";   
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const GoldenBangle = async () => {
    const productData = await fetchProductData("bangle/golden-bangle")
    return (
        <ContextProvider>
            <GlodenBangleClient ProductData={productData} />
        </ContextProvider>
        )
}
export default GoldenBangle

export function generateMetadata() {
    return {
        title: "Golden Bangle Collection"
    }
}