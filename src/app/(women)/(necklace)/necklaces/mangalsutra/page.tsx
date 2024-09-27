import { fetchProductData } from "@/app/api/fetchProductData";
import MangalsutraNecklacesClient from "./MangalsutraNecklacesClient/page";
import ContextProvider from "@/app/components/simplifiedComponents/ContextProvider";

const MangalsutraNecklaces = async () => {
    const productData = await fetchProductData("necklaces/mangalsutra")
    return (
        <ContextProvider>
            <MangalsutraNecklacesClient ProductData={productData} />
        </ContextProvider>
    )
}
export default MangalsutraNecklaces

export function generateMetadata() {
    return {
        title: "Mangalsutra Necklaces Collection"
    }
}