import "./Button.css"
import {ButtonProps} from "../types";
import {Icon} from "../Layouts/Icon";
import { Indicator } from "../Layouts/Indicator";
import { Spinner } from "../Layouts/Spinner";
import { Label } from "../Layouts/Label";

export const Button = (props: ButtonProps) => {
    const {
        size = 'medium',
        color = 'primary',
        variant = 'solid',
        label,
        customLabel,
        icon,
        type = 'button',
        onClick,
        disabled = false,
        indicator,
        trailerComponent,
        additionalClasses,
        loading = false,
        ref
    } = props

    return (
        <button className={`melody-button melody-button-${size} melody-button-${color}-${variant} ${additionalClasses ?? ''}`}
                ref={ref}
                type={type}
                disabled={disabled || loading}
                onClick={onClick}>
            {icon && !icon.rightAligned && <div className={"melody-mr-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} additionalClasses={icon.additionalClasses} /></div>}
            {label}
            {customLabel && <Label {...customLabel} additionalStyles={{cursor: "pointer"}} />}
            {icon && icon.rightAligned && <div className={"melody-ml-0.5"}><Icon icon={icon.icon} additionalStyles={icon.additionalStyles} additionalClasses={icon.additionalClasses} /></div>}
            {indicator &&
              <div className={"melody-mr-0.5"}>
                <Indicator {...indicator} />
              </div>
            }
            {loading &&
              <div className={"melody-pl-0.5"}><Spinner size={'small'} /></div>
            }
            {trailerComponent}
        </button>
    );
};