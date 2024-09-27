import { fetchProductData } from "@/app/api/fetchProductData";
import KundanNecklacesClient from "./KundanNecklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const KundanNecklaces = async () => {
    const productData = await fetchProductData("necklaces/kundan-necklace")
    return (
    <ContextProvider>
        <KundanNecklacesClient ProductData={productData} />
    </ContextProvider>
    )
}
export default KundanNecklaces

export function generateMetadata() {
    return {
        title: "Kundan Necklaces Collection"
    }
}