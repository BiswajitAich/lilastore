import BangleTypesClient from "./BangleTypesClient"

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/bangle/bangle.json`,{
        method: "GET",
        cache: "force-cache"
    })
    const data = await res.json()
    console.log("static data fetched:", data)
    return data;
}

const BangleTypes: React.FC = async () => {
    const productData = await generateStaticParams()
    return (<BangleTypesClient ProductData={productData} />)
}

export default BangleTypes