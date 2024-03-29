import { fetchProductData } from "@/app/api/fetchProductData";
import TerracottaEarringClient from "./TerracottaEarringClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const TerracottaEarring = async () => {
    const productData = await fetchProductData("earring/terracotta-earring")
    return (
        <ContextProvider>
            <TerracottaEarringClient ProductData={productData} />
        </ContextProvider>
    )
}

export default TerracottaEarring

export function generateMetadata() {
    return {
        title: "Terracotta Earring Collection"
    }
}