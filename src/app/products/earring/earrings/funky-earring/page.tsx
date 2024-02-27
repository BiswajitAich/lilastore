import { fetchProductData } from "@/app/api/fetchProductData";
import FunkyEarringClient from "./FuncyEarringClient/page";

const StoneEarring = async () => {
    const productData = await fetchProductData("earring/funky-earring")
    return (<FunkyEarringClient ProductData={productData} />)
}
export default StoneEarring

export function generateMetadata() {
    return {
        title: "Funky Earring Collection"
    }
}