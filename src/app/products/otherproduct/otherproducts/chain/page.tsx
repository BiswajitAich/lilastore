import { fetchProductData } from "@/app/api/fetchProductData";
import ChainClient from "./ChainClient/page";

const Chain = async () => {  
    const productData = await fetchProductData("otherproduct/chain")
    return (<ChainClient ProductData={productData} />)
}
export default Chain

export function generateMetadata() {
    return {
        title: "Chain Collection"
    }
}