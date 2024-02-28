import CosmeticsTypesClient from "./CosmeticsTypesClient";
const fetchProductsData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}cosmetic/cosmetic.json`, {
            method: "GET",
            // cache: "force-cache"
            next: { revalidate: 3600 }
        })
        if (res.ok) {
            const data = await res.json()
            console.log("static data fetched:", data)
            return data;
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}
const CosmeticsTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<CosmeticsTypesClient ProductData={productData} />)
}

export default CosmeticsTypes