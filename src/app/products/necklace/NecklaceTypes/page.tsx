import NecklacesTypesClient from "./NecklaceTypesClient";
const fetchProductsData = async () => {
    if (navigator.onLine) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}necklace/necklaces.json`, {
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
const NecklaceTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<NecklacesTypesClient ProductData={productData} />)
}

export default NecklaceTypes