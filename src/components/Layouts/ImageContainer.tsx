import React from 'react';
import "./Image.css"
import Image from "next/image"

export const ImageContainer = (props: {
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
        <Image className={additionalClasses}
               style={additionalStyles}
               src={src}
               width={width}
               height={height}
               aria-label="Icon"
               alt={alt ?? ""} />
    )
};