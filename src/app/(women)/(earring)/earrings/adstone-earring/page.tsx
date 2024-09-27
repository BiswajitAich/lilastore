import { fetchProductData } from "@/app/api/fetchProductData";
import StoneEarringClient from "./StoneEarringClient/page"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const StoneEarring = async () => {
    const productData = await fetchProductData("earrings/adstone-earring")
    return (
        <ContextProvider>
            <StoneEarringClient ProductData={productData} />
        </ContextProvider>
    )
}

export default StoneEarring

export function generateMetadata() {
    return {
        title: "Stone Earring Collection"
    }
}