import {  revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = await fetch("http://0.0.0.0:8000/stocks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: body.name,
      price: body.price
    })
  })
  const newStock = await response.json()
  //revalidatePath('/stocks')
  revalidateTag('stocks')
  return NextResponse.json(newStock)
}
