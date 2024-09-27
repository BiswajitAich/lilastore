import { NextRequest, NextResponse } from "next/server"
const api = process.env.NEXT_PRIVATE_SIMILAR_API;

export const GET = async (request: NextRequest) => {
    const searchparams = request.nextUrl.searchParams;
    const id = searchparams.get("id")

    const fetchData = async (id: string) => {
        try {
            const res = await fetch(`${api}${id}`,
                { next: { revalidate: 3600 } }
            );
            
            if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
        }
        // console.log(`${api}?id=${id}`);

        const data = await res.json()
        // console.log("server data fetched:", data)
        return data;

    } catch (error) {
        console.error("Error fetching data:", error);
        return null
    }
}


try {
    const data = await fetchData(String(id));
    // console.log(data)
    return new NextResponse(JSON.stringify(data), { status: 200 })
} catch (error) {
    console.log(error)
    return new NextResponse("500 error", { status: 500 })
}
}