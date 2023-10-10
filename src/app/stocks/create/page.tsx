'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

export default function StockForm () {
  const { register, handleSubmit } = useForm()
  const { push } = useRouter();

  async function onSubmit(data: any) {
    console.log(data)
    await fetch('http://localhost:3000/api/stocks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    push('/stocks')
  }

  return (
    <div className="p-10">
      <h1>Stock</h1>
      <form className="flex flex-row gap-3" onSubmit={onSubmit}>
        <input className="text-black p-2 rounded-lg" type="text" {...register('name') } />

        <input className="text-black p-2 rounded-lg" type="text" {...register('price') } placeholder="price" />

        <button className="p-2 border-zinc-100 bg-slate-400 w-24 h-10 rounded-md" onClick={handleSubmit(onSubmit)}>Salvar</button>
      </form>
    </div>
  )

}