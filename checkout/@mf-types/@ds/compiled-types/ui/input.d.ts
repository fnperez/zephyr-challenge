import { InputHTMLAttributes, Ref } from "react";
type InputProps = {
    id: string;
    label: string;
    ref: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;
export declare const Input: ({ id, label, ref, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
