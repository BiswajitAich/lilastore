import BangleTypesClient from "./BangleTypesClient"

const fetchProductsData = async () => {
    if (typeof navigator !== 'undefined' && navigator?.onLine) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}bangle/bangle.json`, {
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

const BangleTypes: React.FC = async () => {
    const productData = await fetchProductsData()
    return (<BangleTypesClient ProductData={productData} />)
}

export default BangleTypes