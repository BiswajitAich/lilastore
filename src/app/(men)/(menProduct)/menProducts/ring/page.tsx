import { fetchProductData } from "@/app/api/fetchProductData"
import RingClient from "./RingClient/page"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider"

const Bracelet = async () => {
    const productData = await fetchProductData("menProducts/ring")
    return (
        <ContextProvider>
            <RingClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Bracelet

export function generateMetadata() {
    return {
        title: "Ring Collection"
    }
}