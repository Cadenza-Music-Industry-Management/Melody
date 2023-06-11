import React, { CSSProperties } from "react";
import "./Image.css"
import NextImage from "next/image"

export const Image = (props: {
    src: any,
    alt?: string,
    additionalStyles?: CSSProperties,
    additionalClasses?: string,
    height?: number,
    width?: number,
    fill?: boolean,
    onClick?: (image: any) => void
}) => {
    const {
        src,
        alt,
        additionalStyles,
        additionalClasses,
        height = undefined,
        width = undefined,
        onClick
    } = props

    return (
        <NextImage className={additionalClasses}
                   style={additionalStyles}
                   src={src}
                   onClick={() => { if (onClick) onClick(src) }}
                   width={width}
                   height={height}
                   aria-label="Icon"
                   alt={alt ?? ""} />
    )
};