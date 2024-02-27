import { fetchProductData } from "@/app/api/fetchProductData";
import NecklacesTypesClient from "./NecklaceTypesClient";

const NecklaceTypes: React.FC = async () => {
    const productData = await fetchProductData("necklace/necklaces")
    return (<NecklacesTypesClient ProductData={productData}/>)
}

export default NecklaceTypes