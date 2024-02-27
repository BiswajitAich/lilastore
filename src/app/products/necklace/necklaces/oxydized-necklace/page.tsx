import { fetchProductData } from "@/app/api/fetchProductData";
import OxydizedNecklacesClient from "./OxydizedNecklaceClient/page";

const OxydizedNecklaces = async () => {
    const productData = await fetchProductData("necklace/oxydized-necklace")
    return (<OxydizedNecklacesClient ProductData={productData} />)
}
export default OxydizedNecklaces

export function generateMetadata() {
    return {
        title: "Oxydized Necklaces Collection"
    }
}