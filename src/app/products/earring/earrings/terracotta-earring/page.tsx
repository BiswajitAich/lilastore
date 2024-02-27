import { fetchProductData } from "@/app/api/fetchProductData";
import TerracottaEarringClient from "./TerracottaEarringClient/page";

const TerracottaEarring = async () => {
    const productData = await fetchProductData("earring/terracotta-earring")
    return (<TerracottaEarringClient ProductData={productData} />)
}

export default TerracottaEarring

export function generateMetadata() {
    return {
        title: "Terracotta Earring Collection"
    }
}