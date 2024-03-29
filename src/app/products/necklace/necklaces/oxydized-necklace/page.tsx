import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedNecklacesClient from "./OxydizedNecklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const OxydizedNecklaces = async () => {
    const productData = await fetchProductData("necklace/oxydized-necklace")
    return (
        <ContextProvider>
            <OxydizedNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default OxydizedNecklaces

export function generateMetadata() {
    return {
        title: "Oxydized Necklaces Collection"
    }
}