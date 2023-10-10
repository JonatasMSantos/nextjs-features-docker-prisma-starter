'use client'

import { useState } from "react";

export function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-10 flex flex-col justify-start gap-10">
      <h1>Client Component</h1>
      <button className="p-2 border-zinc-100 bg-slate-400 w-24 h-10 rounded-md" onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <span className="">{ count }</span>
    </div>
  )
}