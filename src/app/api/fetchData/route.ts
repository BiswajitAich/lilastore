import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    const searchparams = request.nextUrl.searchParams;
    const searchName = searchparams.get("searchName")

    const fetchData = async (searchName: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}${searchName}.json`);
            const data = await res.json()
            console.log("server data fetched:",data)
            return data;
            
        } catch (error) {
            console.log("EEEEEEEEEEEEEEEEEEEEEEEEE",error)
            return null
        }
    }


    try {
        const data = await fetchData(String(searchName));
        // console.log(data)
        return new NextResponse(JSON.stringify(data),{status: 200})
    } catch (error) {
        console.log(error)
        return new NextResponse("500 error",{status: 500})
    }
}