import "./ProgressBar.css"
import {ProgressBarProps} from "../types";

export const ProgressBar = (props: ProgressBarProps) => {
    const {
        size = 'medium',
        progress,
        title,
        subTitle,
        label,
        variant = 'info'
    } = props

    return (
        <div>
            <div className="melody-progressbar-header">
                <span className={`title ${size} ${variant}`}>
                    {title}
                </span>

                <span className={`sub-title ${size} ${variant}`}>
                    {subTitle ? <>{subTitle} ({progress}%)</> : <>{progress}%</>}
                </span>
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