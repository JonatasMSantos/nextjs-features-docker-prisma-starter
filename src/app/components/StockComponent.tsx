'use client'

import { useEffect, useState } from "react"
import { Stock } from "../types/stock"
import { useRouter } from "next/navigation"

type StockComponentProps = {
  stock: Stock
}

async function removeStock(id: number): Promise<any> {
  try {
    const response = await fetch(`http://localhost:3000/api/stocks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { tags: ["stocks"] }
    })

    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export default function StockComponent(props: StockComponentProps) {
  const router = useRouter()

  async function removeById(id: number) {
    const value = await removeStock(id)
    console.log(value)
    router.refresh()
  }

  return (
    <li key={props.stock.id}>
      {props.stock.id} - {props.stock.name} - {props.stock.price}
      <button onClick={() => removeById(props.stock.id)} className='bg-slate-400 p-1 rounded-lg w-12 h-12 text-red-500'>🗑️</button>
    </li>
  )
}