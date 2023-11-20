'use client'

import "./Label.css"
import {LabelProps} from "../types";

export const Label = (props: LabelProps) => {
    const {
        size = 'medium',
        label,
        htmlFor,
        required = false,
        bold = false,
        mediumBold = false,
        additionalStyles,
        additionalClasses,
        color = "black"
    } = props

    return (
        <label htmlFor={htmlFor}
               className={`melody-text-label ${bold ? 'melody-font-bold' : ''} ${mediumBold ? 'melody-font-medium' : ''} ${size} ${additionalClasses ? additionalClasses : ""}`}
               style={{
                   ...additionalStyles,
                   color: color
        }}>
            {label}
            {required && <span className={"melody-text-red-600 melody-font-medium melody-ml-0.5"}>*</span>}
        </label>
    )
}