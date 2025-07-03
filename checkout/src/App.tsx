import ReactDOM from "react-dom/client";

import { Product, useStore } from '@store'
import { Button, Input, ProductCard } from '@ds'

import "./index.css";
import { useRef } from "react";

const App = () => {
  const { products, addProduct } = useStore()
  console.log(products)
  const refs = useRef<Record<'quantity' | 'name', HTMLInputElement | null>>({
    name: null,
    quantity: null
  })

  const handleClick = () => {
    if (!refs.current.name?.value) {
      return alert("add a name")
    }

    if (!refs.current.quantity?.value) {
      return alert("add a quantity")
    }

    addProduct({
      id: refs.current.name.value.toLowerCase().replace(' ', ''),
      name: refs.current.name.value,
      quantity: Number(refs.current.quantity.value)
    })
  }
  
  return (
    <div className="flex flex-col gap-4 p-6 text-3xl mx-auto max-w-6xl bg-primary-900">
      <div>Name: checkout</div>
      <div>Framework: react-19</div>

      <div className="flex flex-col gap-4">
        <Input ref={ref => refs.current.name = ref} id="name" label="Name" />
        <Input ref={ref => refs.current.quantity = ref} id="quantity" label="Quantity" type="number" />

        <Button size="giant" variant="primary" label="Add" onClick={handleClick}/>
      </div>
      
      <div className="flex flex-col gap-2">
        <h1>Products</h1>
        {Object.values(products as Record<string, Product>).map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);