import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedBangleClient from "./OxydizedBangle"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const OxydizedBangle = async () => {
    const productData = await fetchProductData("bangle/oxydized-bangle")
    return (
        <ContextProvider>
            <OxydizedBangleClient ProductData={productData} />
        </ContextProvider>
    )
}
export default OxydizedBangle

export function generateMetadata() {
    return {
        title: "Oxydized Bangle Collection"
    }
}