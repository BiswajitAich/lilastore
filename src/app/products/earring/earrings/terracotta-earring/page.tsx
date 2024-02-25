import TerracottaEarringClient from "./TerracottaEarringClient/page";

let productData: any | null = null;

export async function fetchData() {
    
    try {
        const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
        const resp = await fetch(`${base}/api/fetchData`, {
            method: "POST",
            body: JSON.stringify({
                searchName: "earring/terracotta-earring"
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

const TerracottaEarring = async () => {
    if(!productData) await fetchData()

    return (<TerracottaEarringClient ProductData={productData} />)
}
export default TerracottaEarring

export function generateMetadata() {
    return {
        title: "Terracotta Earring Collection"
    }
}