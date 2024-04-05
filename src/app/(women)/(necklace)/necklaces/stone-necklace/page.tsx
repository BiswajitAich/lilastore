import { fetchProductData } from "@/app/api/fetchProductData";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";
import StoneNecklaceClient from "./StoneNecklaceClient/page";

const StoneNecklace = async () => {
    const productData = await fetchProductData("necklace/stone-necklace")
    return (
        <ContextProvider>
            <StoneNecklaceClient ProductData={productData} />
        </ContextProvider>
    )
}
export default StoneNecklace

export function generateMetadata() {
    return {
        title: "Stone Necklaces Collection"
    }
}