import React from 'react';
import "./Indicator.css"

export const Indicator = (props: {
    variant: string,
    size: string,
    animated: boolean
}) => {
    const {
        variant,
        size,
        animated
    } = props

    //TODO status icon like trello labels

    return (
        <span className={`melody-indicator ${variant} ${size} ${animated && "melody-animate-pulse"}`} />
    );
};