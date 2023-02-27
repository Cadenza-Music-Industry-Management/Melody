import React from 'react';
import "./Image.css"
import NextImage from "next/image"

export const Image = (props: {
    src: any,
    alt?: string,
    additionalStyles?: any,
    additionalClasses?: string,
    height?: any,
    width?: any
}) => {
    const {
        src,
        alt,
        additionalStyles,
        additionalClasses,
        height,
        width
    } = props

    return (
        <NextImage className={additionalClasses}
                   style={additionalStyles}
                   src={src}
                   width={width}
                   height={height}
                   aria-label="Icon"
                   alt={alt ?? ""} />
    )
};