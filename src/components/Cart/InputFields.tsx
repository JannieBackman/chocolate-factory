import {InputHTMLAttributes} from "react";
import "./cart.css";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    error?: string | false
}

export default function InputField({label, error, id, ...props}:InputProps) {
    return (
        <div>
            <label htmlFor={id}>
            </label>
            <input id={id} {...props}/>
            {error && <p className="errorMessage">{error}</p>}
        </div>
    )

}