import "./Button.css"
import {ButtonProps} from "../types";
import {Icon} from "../Layouts/Icon";
import { Indicator } from "@/components/Melody/src/components/Layouts/Indicator";

export const Button = (props: ButtonProps) => {
    const {
        size = 'medium',
        color = 'primary',
        variant = 'solid',
        label,
        icon,
        type = 'button',
        onClick,
        disabled = false,
        indicator,
        trailerComponent,
        additionalClasses
    } = props

    //TODO loading boolean property to add spinner to button

    return (
        <button className={`melody-button melody-button-${size} melody-button-${color}-${variant} ${additionalClasses}`}
                type={type}
                disabled={disabled}
                onClick={onClick}>
            {icon && !icon.rightAligned && <div className={"melody-mr-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} additionalClasses={icon.additionalClasses} /></div>}
            {label}
            {icon && icon.rightAligned && <div className={"melody-ml-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} additionalClasses={icon.additionalClasses} /></div>}
            {indicator &&
              <div className={"melody-mr-0.5"}>
                <Indicator {...indicator} />
              </div>
            }
            {trailerComponent}
        </button>
    );
};