import GlodenBangleClient from "./GoldenBangleClient/page";

let productData: any | null = null;

export async function fetchData() {
    
    try {
        const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const resp = await fetch(`${base}/api/fetchData`, {
            method: "POST",
            body: JSON.stringify({
                searchName: "bangle/golden-bangle"
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 10000,
            },
        })
        if (resp.ok) {
            productData = await resp.json();
            // console.log("productData....",productData)
        } else {
            productData = null;
        }


    } catch (error) {
        console.log("errrrrrrrrrrrrr", error)
    }

}


const GoldenBangle = async () => {
    if(!productData) await fetchData()

    return (<GlodenBangleClient  ProductData={productData}/>)
}
export default GoldenBangle

export function generateMetadata() {
    return {
        title: "Golden Bangle Collection"
    }
}