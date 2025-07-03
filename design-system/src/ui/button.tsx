import classNames from "classnames"
import { HTMLAttributes, ReactElement } from "react"
import { typography } from "./typography"

type ButtonProps = {
    variant: 'primary' | 'outline' | 'text'
    size: 'giant' | 'large' | 'medium' | 'small' | 'tiny'
} & ({
    right?: ReactElement
    left?: ReactElement
    label: string
} | {
    right: ReactElement
    left?: ReactElement
    label?: string
} | {
    right?: ReactElement
    left: ReactElement
    label?: string
}) & HTMLAttributes<HTMLButtonElement>

const SIZE_HASH: Record<ButtonProps['size'], string> = {
    giant: 'px-6 py-4',
    large: 'px-5 py-3',
    medium: 'px-4 py-2',
    small: 'px-3 py-1',
    tiny: 'px-2 py-0'
}

const VARIANT_HASH: Record<ButtonProps['variant'], string> = {
    primary: classNames(
        'bg-primary-500 text-white',
        'hover:bg-primary-700',
        'active:bg-primary-800',
        'focus:ring-primary-200 focus:ring-2',
        'disabled:bg-gray-200 disabled:text-gray-500'
    ),
    outline: classNames(
        'ring-1 ring-primary-500 text-primary-500 bg-white',
        'hover:bg-primary-50 hover:ring-primary-500',
        'active:bg-primary-100 active:ring-primary-500',
        'focus:ring-primary-200 focus:ring-2',
        'disabled:bg-gray-200 disabled:text-gray-500'
    ),
    text: classNames(
        'text-primary-500',
        'hover:bg-primary-50',
        'active:bg-primary-50',
        'focus:bg-primary-100',
        'disabled:text-gray-500'
    ),
}

export const Button = ({ variant, size, right, label, left, ...props}: ButtonProps) => (
    <button className={classNames(
        "flex gap-2 rounded-xl items-center justify-center",
        VARIANT_HASH[variant],
        SIZE_HASH[size],
        typography.button[size]
    )} {...props}>
        {left}
        {label}
        {right}
    </button>
)
