import { fetchProductData } from "@/app/api/fetchProductData";
import ChainClient from "./ChainClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Chain = async () => {
    const productData = await fetchProductData("otherproducts/chain")
    return (
        <ContextProvider>
            <ChainClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Chain

export function generateMetadata() {
    return {
        title: "Chain Collection"
    }
}