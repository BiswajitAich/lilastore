import { fetchProductData } from "@/app/api/fetchProductData";
import FunkyEarringClient from "./FuncyEarringClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const StoneEarring = async () => {
    const productData = await fetchProductData("earrings/funky-earring")
    return (
        <ContextProvider>
            <FunkyEarringClient ProductData={productData} />
        </ContextProvider>
    )
}
export default StoneEarring

export function generateMetadata() {
    return {
        title: "Funky Earring Collection"
    }
}