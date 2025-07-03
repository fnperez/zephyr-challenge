import {create} from 'zustand'

export interface Product {
    id: string
    name: string
    quantity: number
}

interface Store {
    products: Record<string, Product>
    addProduct: (product: Product) => void
}

export const useStore = create<Store>((set) => ({
    products: {},
    addProduct: (product: Product) => set(state => ({
        ...state,
        products: {
            ...state.products,
            [product.id]: {
                ...product,
                quantity: product.quantity + (state.products[product.id]?.quantity || 0)
            }
        }
    }))
}))
