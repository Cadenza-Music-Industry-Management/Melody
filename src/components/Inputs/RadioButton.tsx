import './RadioButton.css'
import {Label} from "../Layouts/Label";
import React from "react";
import { RadioButtonProps } from "@/components/Melody/src/components/types";

export const RadioButton = (props: RadioButtonProps) => {
    const {
        handleChange,
        disabled,
        variant,
        size,
        label,
        subLabel,
        value
    } = props

    //TODO advanced layout for hidden radio button with div design https://flowbite.com/docs/forms/radio/#advanced-layout

    //TODO implement functionality, variants, size, etc... all of it haha

    return (
        <div className="melody-flex melody-items-center melody-mb-4">

            <input type="radio"
                   disabled={disabled}
                   checked={value}
                   onClick={() => handleChange(!value)}
                   name="radio-button"
                   className={`melody-w-4 melody-h-4 melody-text-blue-600 melody-bg-gray-100 melody-border-gray-300 focus:melody-ring-blue-500 dark:focus:melody-ring-blue-600 dark:melody-ring-offset-gray-800 focus:melody-ring-2 dark:melody-bg-gray-700 dark:melody-border-gray-600 ${variant} ${size}`} />

            {(label || subLabel) &&
                <div className="melody-ml-2 melody-text-sm">
                    {label && <Label label={label} />}

                    {subLabel &&
                        <p className="melody-text-xs melody-font-normal melody-text-gray-500">
                            {subLabel}
                        </p>
                    }
                </div>
            }
        </div>
    )
}
