import ChainClient from "./ChainClient/page";

let productData: any | null = null;


const Chain = async () => {
    async function fetchData() {

        try {
            const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
            const resp = await fetch(`${base}/api/fetchData`, {
                method: "POST",
                body: JSON.stringify({
                    searchName: "otherproduct/chain"
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

    return (<ChainClient ProductData={productData} />)
}
export default Chain

export function generateMetadata() {
    return {
        title: "Chain Collection"
    }
}