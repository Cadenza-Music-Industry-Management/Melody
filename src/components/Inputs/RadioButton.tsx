import './RadioButton.css'
import {Label} from "../Layouts/Label";
import React from "react";

export const RadioButton = (props: {
    variant?: string,
    size?: string,
    label?: string,
    value: boolean | undefined
}) => {
    const {
        variant,
        size,
        label,
        value
    } = props

    //TODO advanced layout for hidden radio button with div design https://flowbite.com/docs/forms/radio/#advanced-layout

    //TODO implement functionality, variants, size, etc... all of it haha

    return (
        <div className="melody-flex melody-items-center melody-mb-4">

            <input type="radio"
                   // value={"radio_value"} //TODO hardcoded
                   checked={value}
                   name="radio-button"
                   className="melody-w-4 melody-h-4 melody-text-blue-600 melody-bg-gray-100 melody-border-gray-300 focus:melody-ring-blue-500 dark:focus:melody-ring-blue-600 dark:melody-ring-offset-gray-800 focus:melody-ring-2 dark:melody-bg-gray-700 dark:melody-border-gray-600" />

            {label &&
                <div className={"melody-ml-2"}>
                    <Label htmlFor={"radio-button-input"} label={label} />
                </div>
            }
        </div>
    )
}
