import React from 'react';
import "./Button.css"

export const Button = (props: {
    variant: string,
    size: string,
    label: string,
    onClick: () => void
}) => {
    const {
        variant,
        size,
        label,
        onClick
    } = props

    //melody-animate-spin
    return (
        <button type="button"
                onClick={onClick}
                className={`melody-button ${variant} ${size}`}>
            {label}
        </button>
    );
};