import { fetchProductData } from "@/app/api/fetchProductData";
import PayalClient from "./PayalClient/page";

const Payal = async () => {
    const productData = await fetchProductData("otherproduct/payal")
    return (<PayalClient ProductData={productData} />)
}
export default Payal

export function generateMetadata() {
    return {
        title: "Payal Collection"
    }
}