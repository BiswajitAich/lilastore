import NecklacesTypesClient from "./NecklaceTypesClient";
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/necklace/necklaces.json`,{
        method: "GET",
        cache: "force-cache"
    })
    const data = await res.json()
    console.log("static data fetched:", data)
    return data;
}
const NecklaceTypes: React.FC = async () => {
    const productData = await generateStaticParams() 
    return (<NecklacesTypesClient ProductData={productData}/>)
}

export default NecklaceTypes