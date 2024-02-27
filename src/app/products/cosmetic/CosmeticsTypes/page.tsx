import { fetchProductData } from "@/app/api/fetchProductData";
import CosmeticsTypesClient from "./CosmeticsTypesClient";

const CosmeticsTypes: React.FC = async () => {
    const productData =  await fetchProductData("cosmetic/cosmetic")
    return (<CosmeticsTypesClient ProductData={productData} />)
}

export default CosmeticsTypes