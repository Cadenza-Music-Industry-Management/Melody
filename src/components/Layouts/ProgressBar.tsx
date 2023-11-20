'use client'

import "./ProgressBar.css"
import {ProgressBarProps} from "../types";

export const ProgressBar = (props: ProgressBarProps) => {
    const {
        size = 'medium',
        progress,
        title,
        subTitle,
        label,
        variant = 'info',
        showSubTitle = true,
        fullWidth = false
    } = props

    return (
        <div className={`${fullWidth ? "melody-w-full" : ""}`}>
            <div className="melody-progressbar-header">
                {title &&
                  <span className={`title ${size} ${variant}`}>
                    {title}
                </span>
                }

                {showSubTitle &&
                  <span className={`sub-title ${size} ${variant}`}>
                    {subTitle ? <>{subTitle} ({progress}%)</> : <>{progress}%</>}
                </span>
                }
            </div>

            <div className="melody-progressbar-container">
                <div className={`progress-bar ${size} ${variant}`}
                     style={{width: `${progress}%`}}>
                    <p className={`label ${variant}`}>
                        {label}
                    </p>
                </div>
            </div>
        </div>
    )
}