import OxydizedEarringClient from "./OxydizedEarringClient/page";

let productData: any | null = null;

export async function fetchData() {
    
    try {
        const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const resp = await fetch(`${base}/api/fetchData`, {
            method: "POST",
            body: JSON.stringify({
                searchName: "earring/oxydized-earring"
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

const OxydizedEarring = async () => {
    if(!productData) await fetchData()

    return (<OxydizedEarringClient ProductData={productData} />)
}
export default OxydizedEarring

export function generateMetadata() {
    return {
        title: "Oxydized Earring Collection"
    }
}