import { fetchProductData } from "@/app/api/fetchProductData";
import MantasaClient from "./MantasaClient"
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const Mantasa = async () => {
    const productData = await fetchProductData("bangle/mantasa")
    return (
        <ContextProvider>
            <MantasaClient ProductData={productData} />
        </ContextProvider>
    )
}
export default Mantasa

export function generateMetadata() {
    return {
        title: "Mantasa Collection"
    }
}