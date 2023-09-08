import './RadioCheckbox.css'
import {Label} from "../Layouts/Label";
import { CheckboxRadioButtonProps } from "@/components/Melody/src/components/types";

export const RadioButton = (props: CheckboxRadioButtonProps) => {
    const {
        onChange,
        disabled,
        variant = 'primary',
        size = 'medium',
        label,
        subLabel,
        value,
        additionalParentStyles
    } = props

    return (
        <div className={`melody-radio-checkbox-container ${!subLabel ? "melody-items-center" : ""}`} style={additionalParentStyles}>

            <input type="radio"
                   disabled={disabled}
                   checked={value}
                   onClick={() => {
                       if (onChange) onChange(!value)
                   }}
                   name="radio-button"
                   className={`melody-radio-checkbox ${variant} ${size}`} />

            {(label || subLabel) &&
                <div className="melody-ml-2 melody-text-sm">
                    {label && <Label {...label} />}

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
