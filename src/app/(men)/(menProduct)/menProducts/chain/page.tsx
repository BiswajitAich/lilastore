import { fetchProductData } from "@/app/api/fetchProductData"
import ChainClient from "./ChainClient/page"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider"

const Bracelet = async () => {
    const productData = await fetchProductData("menProducts/chain")
    return (
        <ContextProvider>
            <ChainClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Bracelet

export function generateMetadata() {
    return {
        title: "Chain Collection"
    }
}