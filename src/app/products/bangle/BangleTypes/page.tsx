import { fetchProductData } from "@/app/api/fetchProductData";
import BangleTypesClient from "./BangleTypesClient"  

const BangleTypes: React.FC = async () => {
    const productData =  await fetchProductData("bangle/bangle")
    return (<BangleTypesClient ProductData={productData} />)
}

export default BangleTypes