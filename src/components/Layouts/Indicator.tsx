import React from 'react';
import "./Indicator.css"
import {IndicatorProps} from "../types";

export const Indicator = (props: IndicatorProps) => {
    const {
        variant,
        size,
        animated
    } = props

    return (
        <span className={`melody-indicator ${variant} ${size} ${animated === true && "melody-animate-pulse"}`} />
    );
};