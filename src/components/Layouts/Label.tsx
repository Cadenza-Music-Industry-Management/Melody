import React from 'react';
import "./Label.css"
import {LabelProps} from "../types";

export const Label = (props: LabelProps) => {
    const {
        size = 'medium',
        label,
        htmlFor,
        required = false,
        bold = false,
        additionalStyles
    } = props

    //TODO color?

    //TODO required star

    return (
        <label htmlFor={htmlFor} className={`melody-text-label ${bold && 'melody-font-bold'} ${size}`} style={{...additionalStyles}}>
            {label}
            {required &&  <span className={"melody-text-red-600 melody-font-medium melody-ml-0.5"}>*</span>}
        </label>
    )
}