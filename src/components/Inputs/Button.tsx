import React from 'react';
import "./Button.css"
import {ButtonProps} from "../types";
import {Icon} from "../Layouts/Icon";

export const Button = (props: ButtonProps) => {
    const {
        size = 'medium',
        color = 'primary',
        variant = 'solid',
        label,
        icon,
        type = 'button',
        onClick,
        disabled = false
    } = props

    return (
        <button className={`melody-button melody-button-${size} melody-button-${color}-${variant}`}
                type={type}
                disabled={disabled}
                onClick={onClick}>
            {icon && !icon.rightAligned && <div className={"melody-mr-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} /></div>}
            {label}
            {icon && icon.rightAligned && <div className={"melody-ml-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} /></div>}
        </button>
    );
};