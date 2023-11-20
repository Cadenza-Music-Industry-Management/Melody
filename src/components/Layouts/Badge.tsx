'use client'

import "./Badge.css"
import { BadgeProps } from "../types";
import {Indicator} from "./Indicator";
import { Icon } from "./Icon";

export const Badge = (props: BadgeProps) => {
    const {
        variant = 'info',
        size = 'small',
        text,
        indicator,
        icon,
        fullWidth = false
    } = props

    return (
        <span className={`melody-badge ${variant} ${size} ${fullWidth ? "fullWidth" : ""}`}>
            {indicator &&
                <div className={"melody-mr-0.5"}>
                  <Indicator {...indicator} />
                </div>
            }

            {text}
            {icon && <div className={"melody-pl-0.5"}>
              <Icon {...icon} />
            </div>}
        </span>
    );
};