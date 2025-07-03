import {create} from 'zustand'

interface Product {
    id: string
    name: string
    quantity: number
}

interface Store {
    products: Record<string, Product>
    addProduct: (product: Product) => void
}

const useStore = create<Store>((set) => ({
    products: {},
    addProduct: (product: Product) => set(state => {
        state.products[product.id] = product

        return state
    })
}))

export default useStore