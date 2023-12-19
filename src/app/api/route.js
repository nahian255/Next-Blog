import { NextResponse } from "next/server";
import jsonData from '../../jsonData/blog1.json'

export async function GET(req, res) {

    // console.log(jsonData);

    // if (req.method === 'GET') {
    //     NextResponse.json(jsonData);
    // } else {
    //     NextResponse.json({ message: 'Method Not Allowed' });
    // }

    return NextResponse.json(jsonData)
}
