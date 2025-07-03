import { InputHTMLAttributes, Ref } from "react"
import { typography } from "./typography"
import classNames from "classnames"

type InputProps = {
    id: string
    label: string
    ref: Ref<HTMLInputElement>
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ id, label, ref, ...props }: InputProps) => (
    <div className="flex flex-col gap-1">
        <label htmlFor={id} className={typography.body.b1}>{label}</label>
        <input
            ref={ref}
            id="id" 
            className={classNames(
                "ring-1 ring-gray-200 rounded-xl p-3 active:ring-primary-900",
                typography.body.b1
            )}
            {...props}
        />
    </div>
)
