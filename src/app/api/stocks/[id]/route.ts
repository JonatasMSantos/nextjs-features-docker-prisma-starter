import {  revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type ParamsProps = {
  params: {
    id: number
  }
}

export async function DELETE(request: NextRequest, { params }: ParamsProps) {
  const id = params.id

  const response = await fetch(`http://0.0.0.0:8000/stocks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const reponseValue = await response.json()
  revalidateTag('stocks')
  return NextResponse.json(reponseValue)
}

export async function GET(request: NextRequest, { params }: ParamsProps) { 
  const id = params.id

  const response = await fetch(`http://0.0.0.0:8000/stocks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const reponseValue = await response.json()
  //revalidatePath('/stocks')
  revalidateTag('stocks')
  return NextResponse.json(reponseValue)
}