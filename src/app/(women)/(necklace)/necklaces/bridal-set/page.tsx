import { fetchProductData } from "@/app/api/fetchProductData";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";
import BridalSetClient from "./BridalSetClient/page";

const BridalSet = async () => {
    const productData = await fetchProductData("necklace/bridal-set")
    return (
        <ContextProvider>
            <BridalSetClient ProductData={productData} />
        </ContextProvider>
    )
}
export default BridalSet

export function generateMetadata() {
    return {
        title: "Chemicalbead Necklaces Collection"
    }
}