export interface Product {
    id: string;
    name: string;
    quantity: number;
}
interface Store {
    products: Record<string, Product>;
    addProduct: (product: Product) => void;
}
export declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<Store>>;
export {};
