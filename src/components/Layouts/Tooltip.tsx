import React, {useState} from 'react';
import "./Tooltip.css"
import {TooltipProps} from "../types";

export const Tooltip = (props: TooltipProps) => {
    const {
        message,
        direction = 'right',
        delay = 150,
        children
    } = props

    const [showTooltip, setShowTooltip] = useState(false);
    let timeout: ReturnType<typeof setTimeout>;

    //TODO doesnt position correctly, and delay doesn't work?

    const handleMouseEnter = () => {
        timeout = setTimeout(() => {
            setShowTooltip(true);
        }, delay);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeout);
        setShowTooltip(false);
    };

    const tooltipClasses = `melody-tooltip ${direction === "top" ? "tooltip-top" : ""} ${direction === "right" ? "tooltip-right" : ""} 
    ${direction === "bottom" ? "tooltip-bottom" : ""} ${direction === "left" ? "tooltip-left" : ""} ${showTooltip ? "melody-opacity-100" : "melody-opacity-0"}`;

    //TODO need question mark state for cadenza (or split out to own component? needs color, fontSize?)) and also need disabled state of not showing tooltip for certain cases

    return (
        <div className="melody-inline-block melody-relative">
            <div className="melody-inline-block"
                onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                {children}
            </div>

            {showTooltip &&
                <div className={tooltipClasses}>
                    {message}
                </div>
            }
        </div>
    )
}