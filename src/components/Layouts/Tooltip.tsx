'use client'

import React, {useState} from 'react';
import "./Tooltip.css"
import {TooltipProps} from "../types";

export const Tooltip = (props: TooltipProps) => {
    const {
        message,
        direction = 'right',
        delay = 200,
        children,
        additionalClasses,
        widthClass = 'melody-w-56'
    } = props

    const [showTooltip, setShowTooltip] = useState(false)
    let timeout: ReturnType<typeof setTimeout>

    function handleMouseEnter() {
        timeout = setTimeout(() => {
            setShowTooltip(true)
        }, delay)
    }

    function handleMouseLeave() {
        clearTimeout(timeout);
        setShowTooltip(false)
    }

    const tooltipClasses = `melody-tooltip ${direction === "top" ? "tooltip-top" : ""} ${direction === "right" ? "tooltip-right" : ""} 
    ${direction === "bottom" ? "tooltip-bottom" : ""} ${direction === "left" ? "tooltip-left" : ""} ${showTooltip ? "melody-opacity-100" : "melody-opacity-0"}  ${widthClass ?? ''}`

    //TODO need question mark state for cadenza (or split out to own component? needs color, fontSize?)) and also need disabled state of not showing tooltip for certain cases
    // could just manage children state, so if question=true, then set children to question mark icon

    return (
        <div className={`melody-inline-block melody-relative ${additionalClasses ?? ''}`}>
            <div className="melody-inline-block melody-h-full"
                 onPointerEnter={handleMouseEnter}
                 onPointerLeave={handleMouseLeave}>
                {children}
            </div>

            {showTooltip && message !== "" &&
                <div className={tooltipClasses}>
                    {message}
                </div>
            }
        </div>
    )
}