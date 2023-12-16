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
        fullWidth = false,
        fullHeight = false,
        textAlignClass = "melody-text-center"
    } = props

    return (
        <span className={`melody-badge ${variant} ${size} ${fullWidth ? "fullWidth" : ""} ${fullHeight ? "fullHeight" : ""} ${textAlignClass}`}>
            {indicator &&
                <div className={"melody-mr-0.5"}>
                  <Indicator {...indicator} />
                </div>
            }

            <div className={"melody-inline-block melody-h-full"}>
                <div className={"melody-flex melody-items-center melody-h-full"}>
                    {text}
                </div>
            </div>

            {icon && <div className={"melody-pl-0.5 melody-inline-block melody-h-full"}>
              <div className={"melody-flex melody-items-center melody-h-full"}>
                <Icon {...icon} />
              </div>
            </div>}
        </span>
    );
};