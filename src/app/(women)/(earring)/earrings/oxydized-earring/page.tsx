import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedEarringClient from "./OxydizedEarringClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const OxydizedEarring = async () => {
    const productData = await fetchProductData("earrings/oxydized-earring")
    return (
        <ContextProvider>
            <OxydizedEarringClient ProductData={productData} />
        </ContextProvider>
    )
}
export default OxydizedEarring

export function generateMetadata() {
    return {
        title: "Oxydized Earring Collection"
    }
}