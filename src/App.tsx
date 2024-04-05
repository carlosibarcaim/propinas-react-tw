import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderTotals from "./components/OrderTotals"
import useOrder from "./hooks/useOrder"


function App() {

  //Una vez importado el custom hook lo ponemos dentro del App y lo pasamos vía props al componente hijo(MenuItem)
  const { order, addItem, removeItem, saveOrderContents, tip, setTip, setTempMessage } = useOrder()

  return (
    <>

      <header className="bg-teal-400 py-5">
        <h1 className="text-center font-black text-5xl">Calculadora de propinas y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h1 className=" font-black text-4xl pb-10">Menú</h1>

          <div className=" space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
          
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                saveOrderContents={saveOrderContents}
                setTempMessage={setTempMessage}
              />
            </>
          ) : (
            <div>
              <p className="text-center font-black">La orden está vacía</p>
            </div>
          ) }
          


        </div>
      </main>

    </>
  )
}

export default App
