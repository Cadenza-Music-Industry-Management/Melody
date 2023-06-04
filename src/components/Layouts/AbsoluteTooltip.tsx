'use client'

import React, {useState} from 'react';
import "./Tooltip.css"
import {TooltipProps} from "../types";

//TODO having issues with getting fixed <Tooltip /> to work in slideovers so adding absolute tooltip component for now
export const AbsoluteTooltip = (props: TooltipProps) => {
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

    const tooltipClasses = `melody-tooltip melody-absolute ${direction} ${showTooltip ? "melody-opacity-100" : "melody-opacity-0"}  ${widthClass ?? ''}`

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