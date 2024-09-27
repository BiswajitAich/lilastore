import { fetchProductData } from "@/app/api/fetchProductData";
import FancyEarringClient from "./FancyEarringClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const StoneEarring = async () => {
    const productData = await fetchProductData("earrings/fancy-earring")
    return (
        <ContextProvider>
            <FancyEarringClient ProductData={productData} />
        </ContextProvider>
    )
}
export default StoneEarring

export function generateMetadata() {
    return {
        title: "Fancy Earring Collection"
    }
}