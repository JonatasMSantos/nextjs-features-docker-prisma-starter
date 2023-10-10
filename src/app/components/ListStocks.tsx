import { Stock } from './../types/stock'
import StockComponent from './StockComponent'

export async function ListStock() {
  const response = await fetch('http://0.0.0.0:8000/stocks', { next: { tags: ["stocks"] } })
  const stocks: Stock[] = await response.json()

  return (
    <div>
      <ul>
        {
          stocks.map((stock) => (
            <StockComponent key={stock.id} stock={stock}/>
          ))
        }
      </ul>
    </div>
  )
}