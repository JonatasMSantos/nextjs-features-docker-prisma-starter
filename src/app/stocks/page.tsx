import { ClientComponent } from "../components/ClientComponent";
import { ListStock } from "../components/ListStocks";

export default async function Stock() {
 

  return (
  <div>    
    <ul>
     <ListStock/>
     <ClientComponent/>
    </ul>
  </div>
  )
}