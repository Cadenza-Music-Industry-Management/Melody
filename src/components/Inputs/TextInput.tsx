import React from 'react';
import "./TextInput.css"
import {TextInputProps} from "../types";
import {Label} from "../Layouts/Label";

export const TextInput = (props: TextInputProps) => {
    const {
        value,
        type = 'text',
        label,
        placeholder,
        size = "medium",
        disabled = false,
        onChange
    } = props

    //TODO for add-on and trailing components https://tailwindui.com/components/preview#component-2607d970262ada86428f063c72b1e7bd
    //TODO and another example for add-on here like our current design
    // <div className="mt-1 flex rounded-md shadow-sm">
    //                         <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
    //                           http://
    //                         </span>
    //                         <input
    //                           type="text"
    //                           name="company-website"
    //                           id="company-website"
    //                           className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //                           placeholder="www.example.com"
    //                         />
    //                       </div>

    return (
        <div>
            {label && <Label htmlFor={"textInput"} label={label} />}
            <input type={type}
                   placeholder={placeholder}
                   value={value}
                   disabled={disabled}
                   onChange={(event => onChange(event.target.value))}
                   id="textInput"
                   className={`melody-text-input ${size}`} />
        </div>
    );
};