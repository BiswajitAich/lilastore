import OtherProductsTypesClient from "./OtherProductsTypesClient";
const fetchProductsData = async () => {
    if (navigator.onLine) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}otherproduct/otherproduct.json`, {
            method: "GET",
            // cache: "force-cache"
            next: { revalidate: 3600}
        })
        if (res.ok) {
            const data = await res.json()
            console.log("static data fetched:", data)
            return data;
        }else{
            return null
        }
    }else{
        return null
    }
}
const OtherProductsTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<OtherProductsTypesClient ProductData={productData} />)
}

export default OtherProductsTypes