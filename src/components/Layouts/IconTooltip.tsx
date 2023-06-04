"use client"

import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { Tooltip } from "@/components/Melody/src/components/Layouts/Tooltip";
import { IconTooltipProps } from "@/components/Melody/src/components/types";
import { motion } from "framer-motion";

export const IconTooltip = (props: IconTooltipProps) => {
    const {
        icon = "circleQuestion",
        fontSize = 20,
        fontColor = "#0C192C",
        message,
        direction = 'right'
    } = props

    //TODO motion.div was causing tooltip to not work correctly (vanishing)
    return (
       <Tooltip message={message} direction={direction}>
           <Icon icon={icon} additionalStyles={{color: fontColor, fontSize: fontSize, cursor: "pointer"}} />
       </Tooltip>
    );
};