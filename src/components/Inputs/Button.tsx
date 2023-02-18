import React from 'react';
import "./Button.css"
import {ButtonProps} from "../types";

export const Button = (props: ButtonProps) => {
    const {
        size = 'medium',
        color = 'primary',
        variant = 'solid',
        label,
        onClick
    } = props

    //melody-animate-spin
    return (
        <button type="button"
                onClick={onClick}
                className={`melody-button melody-button-${size} melody-button-${color}-${variant}`}>
            {label}
        </button>
    );
};