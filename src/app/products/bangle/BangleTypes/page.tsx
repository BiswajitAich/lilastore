import BangleTypesClient from "./BangleTypesClient"
let productData: any | null = null;


const BangleTypes: React.FC = async () => {
    async function fetchData() {

        try {
            const base = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
            const resp = await fetch(`${base}/api/fetchData`, {
                method: "POST",
                body: JSON.stringify({
                    searchName: "bangle/bangle"
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

    if (!productData) await fetchData()

    return (<BangleTypesClient ProductData={productData} />)
}

export default BangleTypes