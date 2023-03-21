import './Checkbox.css'
import {Label} from "../Layouts/Label";
import React from "react";

//TODO move to interface types file for melody
export const Checkbox = (props: {
    handleChange: (checked: boolean) => void,
    value: boolean | undefined,
    size?: string,
    variant?: string,
    label?: string,
    subLabel?: string,
    disabled?: boolean
}) => {
    const {
        variant = 'primary',
        size = 'medium',
        label,
        subLabel,
        handleChange,
        value,
        disabled
    } = props

    return (
        <div className="melody-checkbox-container">
            <input aria-describedby="checkbox-sub-label"
                   type="checkbox"
                   disabled={disabled}
                   checked={value}
                   onClick={() => handleChange(!value)}
                   className={`melody-checkbox ${variant} ${size}`} />

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
