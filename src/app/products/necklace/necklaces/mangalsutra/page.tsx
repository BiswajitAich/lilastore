import { fetchProductData } from "@/app/api/fetchProductData";
import MangalsutraNecklacesClient from "./MangalsutraNecklacesClient/page";

const MangalsutraNecklaces = async () => {
    const productData = await fetchProductData("necklace/mangalsutra")
    return (<MangalsutraNecklacesClient ProductData={productData} />)
}
export default MangalsutraNecklaces

export function generateMetadata() {
    return {
        title: "Mangalsutra Necklaces Collection"
    }
}