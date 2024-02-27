import { fetchProductData } from "@/app/api/fetchProductData";
import EarringTypesClient from "./EarringTypesClient";

const EarringTypes: React.FC = async () => {
    const productData = await fetchProductData("earring/earring")
    return (<EarringTypesClient ProductData={productData} />)
}

export default EarringTypes