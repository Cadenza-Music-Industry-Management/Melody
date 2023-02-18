import React from 'react';
import "./Label.css"
import {LabelProps} from "../types";

export const Label = (props: LabelProps) => {
    const {
        size,
        label,
        htmlFor,
        required = false,
        bold = false
    } = props

    //TODO color?

    //TODO required star

    return (
        <label htmlFor={htmlFor} className={`melody-text-label ${bold && 'melody-font-bold'} ${size}`}>
            {label}
            {required &&  <span className={"melody-text-red-600 melody-font-medium melody-ml-0.5"}>*</span>}
        </label>
    )
}