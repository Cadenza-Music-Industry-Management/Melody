import './Checkbox.css'
import {Label} from "../Layouts/Label";
import React from "react";

export const Checkbox = (props: {
    variant: string,
    size: string,
    label: string,
    subLabel: string
}) => {
    const {
        variant,
        size,
        label,
        subLabel
    } = props

    return (
        <div className="melody-flex">
            <div className="melody-flex melody-items-center melody-h-5">
                <input id="checkbox"
                       aria-describedby="checkbox-sub-label"
                       type="checkbox"
                       value=""
                       className="melody-w-4 melody-h-4 melody-text-blue-600 melody-bg-gray-100 melody-border-gray-300 melody-rounded focus:melody-ring-blue-500 dark:focus:melody-ring-blue-600 dark:melody-ring-offset-gray-800 focus:melody-ring-2 dark:melody-bg-gray-700 dark:melody-border-gray-600" />
            </div>
            <div className="melody-ml-2 melody-text-sm">
                {label && <Label htmlFor={"checkbox"} label={label} />}

                {subLabel &&
                    <p id="checkbox-sub-label"
                       className="melody-text-xs melody-font-normal melody-text-gray-500 dark:melody-text-gray-300">
                        {subLabel}
                    </p>
                }
            </div>
        </div>
    )
}
