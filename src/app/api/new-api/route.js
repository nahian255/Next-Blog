// import { imgArry } from "@/lib/db"
import { product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    // const data = imgArry;
    await mongoose.connect(connectionSrt)
    const api = await product.find()
    console.log(' api hi', api);
    return NextResponse.json(data)
}