'use client'

import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { IconTooltipProps } from "../../components/types";

export const IconTooltip = (props: IconTooltipProps) => {
    const {
        icon = "circleQuestion",
        fontSize = 20,
        fontColor = "#0C192C",
        message,
        direction = 'right'
    } = props

    return (
       <Tooltip message={message} direction={direction}>
           <div className={"melody-flex melody-items-center melody-h-full"}>
               <Icon icon={icon} additionalStyles={{color: fontColor, fontSize: fontSize, cursor: "pointer"}} />
           </div>
       </Tooltip>
    );
};