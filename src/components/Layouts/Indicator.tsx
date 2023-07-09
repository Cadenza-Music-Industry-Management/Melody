import "./Indicator.css"
import {IndicatorProps} from "../types";

export const Indicator = (props: IndicatorProps) => {
    const {
        variant = 'info',
        size = 'medium',
        animated
    } = props

    return (
        <span className={`melody-indicator ${variant} ${size} ${animated === true && "melody-animate-pulse"}`} />
    );
};