import EarringTypesClient from "./EarringTypesClient";
const fetchProductsData = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}earring/earring.json`, {
            method: "GET",
            // // cache: "force-cache"
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
const EarringTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<EarringTypesClient ProductData={productData} />)
}

export default EarringTypes