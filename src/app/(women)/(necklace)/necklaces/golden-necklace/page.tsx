import { fetchProductData } from "@/app/api/fetchProductData";
import GoldenNecklacesClient from "./GoldenNecklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const GoldenNecklaces = async () => {
    const productData = await fetchProductData("necklaces/golden-necklace")
    return (
    <ContextProvider>
        <GoldenNecklacesClient ProductData={productData} />
    </ContextProvider>
    )
}
export default GoldenNecklaces

export function generateMetadata() {
    return {
        title: "Golden Necklaces Collection"
    }
}