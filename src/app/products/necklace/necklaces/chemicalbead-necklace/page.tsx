import { fetchProductData } from "@/app/api/fetchProductData";
import ChemicalbeadNecklacesClient from "./ChemicalbeadNecklaceClient/page";

const ChemicalbeadNecklaces = async () => {
    const productData = await fetchProductData("necklace/chemicalbead-necklace")
    return (<ChemicalbeadNecklacesClient ProductData={productData} />)
}
export default ChemicalbeadNecklaces

export function generateMetadata() {
    return {
        title: "Chemicalbead Necklaces Collection"
    }
}