import { fetchProductData } from "@/app/api/fetchProductData";
import OtherProductsTypesClient from "./OtherProductsTypesClient";

const OtherProductsTypes: React.FC = async () => {    
    const productData = await fetchProductData("otherproduct/otherproduct")
    return (<OtherProductsTypesClient ProductData={productData}/>)
}

export default OtherProductsTypes