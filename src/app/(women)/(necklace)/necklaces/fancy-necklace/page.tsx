import { fetchProductData } from "@/app/api/fetchProductData";
import FancyNecklacesClient from "./FancyNacklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const FancyNecklaces = async () => {
    const productData = await fetchProductData("necklaces/fancy-necklace")
    return (
        <ContextProvider>
            <FancyNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default FancyNecklaces

export function generateMetadata() {
    return {
        title: "Fancy Necklaces Collection"
    }
}