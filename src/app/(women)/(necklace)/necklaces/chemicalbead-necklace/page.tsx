import { fetchProductData } from "@/app/api/fetchProductData";
import ChemicalbeadNecklacesClient from "./ChemicalbeadNecklaceClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const ChemicalbeadNecklaces = async () => {
    const productData = await fetchProductData("necklaces/chemicalbead-necklace")
    return (
        <ContextProvider>
            <ChemicalbeadNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default ChemicalbeadNecklaces

export function generateMetadata() {
    return {
        title: "Chemicalbead Necklaces Collection"
    }
}