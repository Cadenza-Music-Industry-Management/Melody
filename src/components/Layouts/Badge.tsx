import React from 'react';
import "./Badge.css"
import { BadgeProps } from "../types";
import {Indicator} from "./Indicator";

export const Badge = (props: BadgeProps) => {
    const {
        variant = 'info',
        size = 'small',
        text,
        indicator
    } = props

    return (
        <span className={`melody-badge ${variant} ${size}`}>
            {indicator &&
                <div className={"melody-mr-0.5"}>
                  <Indicator {...indicator} />
                </div>
            }

            {text}
        </span>
    );
};