import { fetchProductData } from "@/app/api/fetchProductData";
import GoldenEarringClient from "./GoldenEarringClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const GoldenEarring = async () => {
    const productData = await fetchProductData("earring/golden-earring")
    return (
        <ContextProvider>
            <GoldenEarringClient ProductData={productData} />
        </ContextProvider>
    )

}
export default GoldenEarring

export function generateMetadata() {
    return {
        title: "Golden Earring Collection"
    }
}