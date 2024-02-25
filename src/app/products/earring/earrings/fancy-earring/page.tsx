import FancyEarringClient from "./FancyEarringClient/page";

let productData: any | null = null;


const StoneEarring = async () => {
    async function fetchData() {
    
        try {
            const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
            const resp = await fetch(`${base}/api/fetchData`, {
                method: "POST",
                body: JSON.stringify({
                    searchName: "earring/fancy-earring"
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
    
    if(!productData) await fetchData()

    return (<FancyEarringClient ProductData={productData} />)
}
export default StoneEarring

export function generateMetadata() {
    return {
        title: "Fancy Earring Collection"
    }
}