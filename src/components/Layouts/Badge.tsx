import React from 'react';
import "./Badge.css"
import {IndicatorProps} from "../types";
import {Indicator} from "./Indicator";

export const Badge = (props: {
    variant: string,
    size: string,
    text: string,
    indicator?: IndicatorProps,
}) => {
    const {
        variant,
        size,
        text,
        indicator
    } = props

    return (
        <span className={`melody-badge ${variant} ${size}`}>
            {indicator &&
                <div className={"melody-mr-0.5"}>
                    <Indicator variant={indicator.variant}
                               size={indicator.size}
                               animated={indicator.animated} />
                </div>
            }

            {text}
        </span>
    );
};