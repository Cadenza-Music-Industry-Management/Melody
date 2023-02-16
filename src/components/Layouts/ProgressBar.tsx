import React from 'react';
import "./ProgressBar.css"

export const ProgressBar = (props: {
    size: string,
    progress: number,
    label: string
}) => {
    const {
        size,
        progress,
        label
    } = props

    //TODO sizes, variants https://flowbite.com/docs/components/progress/

    return (
        <>
            <div className="melody-flex melody-justify-between melody-mb-1">
                <span className="melody-text-base melody-font-medium melody-text-blue-700 dark:melody-text-white">Top label</span>
                <span className="melody-text-sm melody-font-medium melody-text-blue-700 dark:melody-text-white">{progress}%</span>
            </div>

            <div className="melody-w-full melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700">
                <div className="melody-bg-blue-600 melody-text-xs melody-font-medium melody-text-blue-100 melody-text-center melody-p-0.5 melody-leading-none melody-rounded-full"
                     style={{
                         width: `${progress}%`,
                     }}>
                    {/*TODO hide label when progress too small (or elipsis?)*/}
                    {label}
                </div>
            </div>
        </>
    )
}