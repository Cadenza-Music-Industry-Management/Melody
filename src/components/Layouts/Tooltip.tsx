'use client'

import React, { useEffect, useRef, useState } from "react";
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

    const parentRef = useRef<any>(null);
    const tooltipRef = useRef<any>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [showTooltip, setShowTooltip] = useState(false)
    let timeout: ReturnType<typeof setTimeout>

    useEffect(() => {
        const parentElement = parentRef.current;
        const tooltipElement = tooltipRef.current;

        const updateTooltipPosition = () => {
            let parentRect = parentElement?.getBoundingClientRect();
            const tooltipRect = tooltipElement?.getBoundingClientRect();

            let top, left;
            if (direction === 'left') {
                top = parentRect.top;
                left = parentRect.left - tooltipRect?.width - 5;
            } else if (direction === 'right') {
                top = parentRect.top;
                left = parentRect.left + parentRect?.width + 5;
            } else if (direction === 'bottom') {
                top = parentRect.top + parentRect?.height + 5;
                left = parentRect.left;
            } else {
                top = parentRect.top - tooltipRect?.height - 5;
                left = parentRect.left;
            }

            setTooltipPosition({ top, left });
        };

        if (showTooltip) updateTooltipPosition();

        window.addEventListener('resize', updateTooltipPosition);

        return () => {
            window.removeEventListener('resize', updateTooltipPosition);
        };
    }, [showTooltip])

    function handleMouseEnter() {
        timeout = setTimeout(() => {
            setShowTooltip(true)
        }, delay)
    }

    function handleMouseLeave() {
        clearTimeout(timeout);
        setShowTooltip(false)
    }

    const tooltipClasses = `melody-tooltip melody-fixed ${showTooltip ? "melody-opacity-100" : "melody-opacity-0"}  ${widthClass ?? ''}`

    return (
        <div className={`melody-inline-block melody-relative ${additionalClasses ?? ''}`}>
            <div className="melody-inline-block melody-h-full"
                 ref={parentRef}
                 onPointerEnter={handleMouseEnter}
                 onPointerLeave={handleMouseLeave}>
                {children}
            </div>

            {message !== "" &&
              <div className={tooltipClasses}
                   style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                   ref={tooltipRef}>
                  {message}
              </div>
            }
        </div>
    )
}