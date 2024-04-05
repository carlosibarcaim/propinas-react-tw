import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    //Pasamos la funcion de addItem dentro del type y luego la pasamos como callback en el button
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button 
      className=" border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p>{formatCurrency(item.price)}</p>
    </button>
  )
}
