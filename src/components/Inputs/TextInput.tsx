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
        size = 'medium',
        disabled = false,
        onChange,
        headerComponent,
        trailerComponent
    } = props

    return (
        <div className={"melody-w-full"}>
            {label && <Label {...{...label, htmlFor: "textInput"}} />}
            <div className="mt-1 melody-flex melody-rounded-md melody-shadow-sm">

                {headerComponent &&
                    <span className="melody-inline-flex melody-items-center melody-rounded-l-lg melody-border melody-border-r-0 melody-border-gray-300 melody-bg-gray-50 melody-px-3 melody-text-sm melody-text-gray-500">
                        {headerComponent}
                    </span>
                }

                <input type={type}
                       placeholder={placeholder}
                       value={value}
                       disabled={disabled}
                       onChange={(event => onChange(event.target.value))}
                       id="textInput"
                       className={`melody-text-input ${headerComponent ? (trailerComponent ? 'hasHeaderTrailer' : 'hasHeader') : (trailerComponent ? 'hasTrailer' : '')} ${size}`} />

                {trailerComponent &&
                    <span className="melody-inline-flex melody-items-center melody-rounded-r-lg melody-border melody-border-l-0 melody-border-gray-300 melody-bg-gray-50 melody-px-3 melody-text-sm melody-text-gray-500">
                        {trailerComponent}
                    </span>
                }
            </div>
        </div>
    );
};