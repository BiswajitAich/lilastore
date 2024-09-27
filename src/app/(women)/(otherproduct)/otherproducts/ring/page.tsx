import { fetchProductData } from "@/app/api/fetchProductData";
import RingClient from "./RingClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Ring = async () => {
    const productData = await fetchProductData("otherproducts/ring")
    return (
        <ContextProvider>
            <RingClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Ring

export function generateMetadata() {
    return {
        title: "Ring Collection"
    }
}