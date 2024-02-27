import CosmeticsTypesClient from "./CosmeticsTypesClient";
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cosmetic/cosmetic.json`,{
        method: "GET",
        cache: "force-cache"
    })
    const data = await res.json()
    console.log("static data fetched:", data)
    return data;
}
const CosmeticsTypes: React.FC = async () => {
    const productData =  await generateStaticParams()
    return (<CosmeticsTypesClient ProductData={productData} />)
}

export default CosmeticsTypes