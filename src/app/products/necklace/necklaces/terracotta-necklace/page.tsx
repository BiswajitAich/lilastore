import { fetchProductData } from "@/app/api/fetchProductData";
import TerracottaNecklacesClient from "./TerracottaNecklace/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const TerracottaNecklaces = async () => {
    const productData = await fetchProductData("necklace/terracotta-necklace")
    return (
        <ContextProvider>
            <TerracottaNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default TerracottaNecklaces

export function generateMetadata() {
    return {
        title: "Terracotta Necklaces Collection"
    }
}