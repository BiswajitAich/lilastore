import { fetchProductData } from "@/app/api/fetchProductData";
import MantasaClient from "./MantasaClient"

const Mantasa = async () => {
    const productData = await fetchProductData("bangle/mantasa")
    return (<MantasaClient ProductData={productData} />)
}
export default Mantasa

export function generateMetadata() {
    return {
        title: "Mantasa Collection"
    }
}