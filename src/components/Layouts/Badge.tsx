import "./Badge.css"
import { BadgeProps } from "../types";
import {Indicator} from "./Indicator";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

export const Badge = (props: BadgeProps) => {
    const {
        variant = 'info',
        size = 'small',
        text,
        indicator,
        icon
    } = props

    return (
        <span className={`melody-badge ${variant} ${size}`}>
            {indicator &&
                <div className={"melody-mr-0.5"}>
                  <Indicator {...indicator} />
                </div>
            }

            {text}
            {icon && <Icon {...icon} />}
        </span>
    );
};