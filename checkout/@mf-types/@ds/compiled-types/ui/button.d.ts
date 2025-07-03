import { HTMLAttributes, ReactElement } from "react";
type ButtonProps = {
    variant: 'primary' | 'outline' | 'text';
    size: 'giant' | 'large' | 'medium' | 'small' | 'tiny';
} & ({
    right?: ReactElement;
    left?: ReactElement;
    label: string;
} | {
    right: ReactElement;
    left?: ReactElement;
    label?: string;
} | {
    right?: ReactElement;
    left: ReactElement;
    label?: string;
}) & HTMLAttributes<HTMLButtonElement>;
export declare const Button: ({ variant, size, right, label, left, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
