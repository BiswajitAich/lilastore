import { fetchProductData } from "@/app/api/fetchProductData";
import PayalClient from "./PayalClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Payal = async () => {
    const productData = await fetchProductData("otherproduct/payal")
    return (
        <ContextProvider>
            <PayalClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Payal

export function generateMetadata() {
    return {
        title: "Payal Collection"
    }
}