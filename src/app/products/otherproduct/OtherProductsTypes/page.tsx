import OtherProductsTypesClient from "./OtherProductsTypesClient";
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/otherproduct/otherproduct.json`,{
        method: "GET",
        cache: "force-cache"
    })
    const data = await res.json()
    console.log("static data fetched:", data)
    return data;
}
const OtherProductsTypes: React.FC = async () => {    
    const productData = await generateStaticParams()
    return (<OtherProductsTypesClient ProductData={productData}/>)
}

export default OtherProductsTypes