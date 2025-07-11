import { typography } from "./typography";

export const ProductCard = ({ id, name, quantity }: {id: string, name: string, quantity: number}) => (
    <div className="p-4 bg-primary-500 text-white rounded-xl flex flex-row gap-4">
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2609 9.69589L20.6455 18.6959C20.8319 19.9074 19.8945 21 18.6688 21H5.33122C4.10545 21 3.16809 19.9074 3.35448 18.6959L4.73909 9.69589C4.8892 8.72022 5.7287 8 6.71584 8H17.2842C18.2713 8 19.1108 8.72022 19.2609 9.69589Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="flex flex-col gap-2">
            <span className={typography.body.b2}>ID: #{id}</span>
            <span className={typography.body.b1}>Name: {name}</span>
            <span className={`mt-1 ${typography.body.b4}`}>Quantity: {quantity}</span>
        </div>
    </div>
)
