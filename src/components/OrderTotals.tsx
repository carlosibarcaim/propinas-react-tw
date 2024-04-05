import { useMemo, Dispatch, SetStateAction } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    saveOrderContents: () => void
    setTempMessage: Dispatch<SetStateAction<string | null>>
}

export default function OrderTotals({order, tip, saveOrderContents}: OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0)
    ,[order])
    const tipAmount = useMemo(() => subtotalAmount * tip ,[tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip,order])

  return (
    <>
      
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina:</h2>
            <p>Subtotal a pagar:
                <span className=" font-bold"> {formatCurrency(subtotalAmount)} </span>
            </p>
            <p>Propina:
                <span className=" font-bold"> {formatCurrency(tipAmount)} </span>
            </p>
            <p>Total a pagar:
                <span className=" font-bold text-teal-400"> {formatCurrency(totalAmount)} </span>
            </p>
        </div>

        <div className="flex justify-center">
            <button 
                className="bg-teal-200 border border-teal-400 hover:bg-teal-400 rounded-md p-4 mt-5 w-full font-black uppercase disabled:opacity-10"
                onClick={() => saveOrderContents()}
                disabled={totalAmount === 0}
            >
                Guardar Orden
            </button>
        </div>

    </>
  )
}
