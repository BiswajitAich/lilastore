import { fetchProductData } from "@/app/api/fetchProductData";
import MakeupClient from "./CosmeticsClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Makeup = async () => {
    const productData = await fetchProductData("cosmetics/makeup")
    return (
        <ContextProvider>
            <MakeupClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Makeup

export function generateMetadata() {
    return {
        title: "Makeup Collection"
    }
}