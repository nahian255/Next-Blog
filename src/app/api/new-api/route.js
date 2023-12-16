import { imgArry } from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = imgArry;
    return NextResponse.json(data)
}