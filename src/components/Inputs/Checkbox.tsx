'use client'

import './RadioCheckbox.css'
import {Label} from "../Layouts/Label";
import { CheckboxRadioButtonProps } from "../../components/types";
import { useEffect, useState } from "react";

export const Checkbox = (props: CheckboxRadioButtonProps) => {

    const {
        variant = 'primary',
        size = 'medium',
        label,
        subLabel,
        onChange,
        value,
        disabled,
        additionalParentStyles
    } = props

    const [stateValue, setStateValue] = useState(value)

    useEffect(() => {
        if (value !== undefined && value !== stateValue) setStateValue(value)
    }, [value])

    return (
        <div className={`melody-radio-checkbox-container ${!subLabel ? "melody-items-center" : ""}`} style={additionalParentStyles}>
            <input aria-describedby="checkbox-sub-label"
                   type="checkbox"
                   disabled={disabled}
                   checked={stateValue}
                   onChange={() => {
                       setStateValue(!stateValue)
                       if (onChange) onChange(!value)
                   }}
                   className={`melody-radio-checkbox ${variant} ${size}`} />

            {(label || subLabel) &&
              <div className="melody-ml-2 melody-text-sm"
                   onClick={() => {
                       setStateValue(!stateValue)
                       if (onChange) onChange(!value)
                   }}>
                  {label && <Label {...label} additionalClasses={"melody-cursor-pointer"} />}

                  {subLabel &&
                    <p className="melody-text-xs melody-font-normal melody-text-gray-500 melody-cursor-pointer">
                        {subLabel}
                    </p>
                  }
              </div>
            }
        </div>
    )
}
