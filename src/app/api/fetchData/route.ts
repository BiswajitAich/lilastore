import { NextRequest, NextResponse } from "next/server"
const base = process.env.NEXT_PUBLIC_BASE_URL;
const api = process.env.NEXT_PUBLIC_API;

export const GET = async (request: NextRequest) => {
    const searchparams = request.nextUrl.searchParams;
    const searchName = searchparams.get("searchName")

    const fetchData = async (searchName: string) => {
        try {
            let res: Response;
            if (base?.startsWith("http://")) {
                res = await fetch(`${api}?fetchData=${searchName}.json`)
            } else {
                res = await fetch(`${api}${searchName}.json`,
                    { next: { revalidate: 3600 } }
                );
            }
            
            if (!res.ok) {
                throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
            }
            console.log(`${api}?fetchData=${searchName}.json`);

            const data = await res.json()
            // console.log("server data fetched:", data)
            return data;

        } catch (error) {
            console.error("Error fetching data:", error);
            return null
        }
    }


    try {
        const data = await fetchData(String(searchName));
        // console.log(data)
        return new NextResponse(JSON.stringify(data), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse("500 error", { status: 500 })
    }
}