import { fetchProductData } from "@/app/api/fetchProductData";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";
import ForeheadOrnamentClient from "./ForeheadOrnamentClient/page";

const ForeheadOrnament = async () => {
    const productData = await fetchProductData("otherproduct/forehead-ornament")
    return (
        <ContextProvider>
            <ForeheadOrnamentClient ProductData={productData} />
        </ContextProvider>
    )
}
export default ForeheadOrnament

export function generateMetadata() {
    return {
        title: "Forehead Ornament Collection"
    }
}