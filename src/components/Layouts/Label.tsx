import React from 'react';
import "./Label.css"
import {LabelProps} from "../types";

export const Label = (props: LabelProps) => {
    const {
        size,
        label,
        htmlFor
    } = props

    //TODO color?

    return (
        <label htmlFor={htmlFor} className={`melody-text-label ${size}`}>
            {label}
        </label>
    )
}