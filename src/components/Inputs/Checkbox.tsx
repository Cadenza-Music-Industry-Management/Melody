import './RadioCheckbox.css'
import {Label} from "../Layouts/Label";
import { CheckboxRadioButtonProps } from "@/components/Melody/src/components/types";

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

    return (
        <div className="melody-radio-checkbox-container" style={additionalParentStyles}>
            <input aria-describedby="checkbox-sub-label"
                   type="checkbox"
                   disabled={disabled}
                   checked={value}
                   onClick={() => {
                       if (onChange) onChange(!value)
                   }}
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
