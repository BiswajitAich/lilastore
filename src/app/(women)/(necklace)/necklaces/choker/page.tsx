import { fetchProductData } from "@/app/api/fetchProductData";
import ChokerNecklacesClient from "./CokerNecklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const ChokerNecklaces = async () => {
    const productData = await fetchProductData("necklaces/choker")
    return (
        <ContextProvider>
            <ChokerNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default ChokerNecklaces

export function generateMetadata() {
    return {
        title: "Choker Necklaces Collection"
    }
}