import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request)
{
    try{
        return NextResponse.json({message: "Recieved get request"}, {status:200})
    }
    catch(err)
    {
        return NextResponse.json({error: err},{status:500})
    }
}