import React from 'react';
import "./Badge.css"

export const Badge = (props: {
    variant: string,
    size: string,
    text: string
}) => {
    const {
        variant,
        size,
        text
    } = props

    //TODO status icon like trello labels

    return (
        <span className={`melody-badge ${variant} ${size}`}>
            {text}
        </span>
    );
};