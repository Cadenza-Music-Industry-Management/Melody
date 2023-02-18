import React from 'react';
import "./TextInput.css"
import {TextInputProps} from "../types";
import {Label} from "../Layouts/Label";

export const TextArea = (props: TextInputProps) => {
    const {
        value,
        label,
        placeholder,
        size = "medium",
        disabled = false,
        onChange
    } = props

    return (
        <div>
            {label && <Label {...{...label, htmlFor: "textArea"}} />}
            <textarea placeholder={placeholder}
                      value={value}
                      rows={4}
                      disabled={disabled}
                      onChange={(event => onChange(event.target.value))}
                      id="textArea"
                      className={`melody-text-input ${size}`} />
        </div>
    );
};