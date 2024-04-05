import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

// Creamos el custom hook useOrder y lo importamos en App.tsx
export default function useOrder () {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    const [tempMessage, setTempMessage] = useState<string | null>(null)

    // Al poner los parametros de las funciones debemos especificar el tipo de dato en caso de ser tipo:any
    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            // orderItem es una variable temporal para acceder a los objetos
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity +1} :
                orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }

        
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const saveOrderContents = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        saveOrderContents,
        tempMessage,
        setTempMessage
    }

}

