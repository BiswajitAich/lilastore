import EarringTypesClient from "./EarringTypesClient";
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/earring/earring.json`,{
        method: "GET",
        cache: "force-cache"
    })
    const data = await res.json()
    console.log("static data fetched:", data)
    return data;
}
const EarringTypes: React.FC = async () => {
    const productData = await generateStaticParams()
    return (<EarringTypesClient ProductData={productData} />)
}

export default EarringTypes