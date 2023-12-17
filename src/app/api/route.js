import { connectionSrt, imgArry } from "@/lib/db"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = imgArry;
    // console.log(data);
    await mongoose.connect(connectionSrt)
    return NextResponse.json(data)
}