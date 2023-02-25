import React from 'react';
import "./Image.css"
import Image from "next/image"

export const ImageContainer = (props: {
    // ImageComponent?: any, //TODO hacky to use required next/image library in Next project
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

    const getImageComponent = () => {
        //ImageComponent !== undefined
        if (process.env.NEXT_PUBLIC_USING_NEXT) {
            return <Image className={additionalClasses}
                          style={additionalStyles}
                                   src={src}
                                   aria-label="Icon"
                                   alt={alt ?? ""} />
        } else {
            return <img className={additionalClasses}
                        style={additionalStyles}
                        src={src}
                        aria-label="Icon"
                        alt={alt ?? ""} />
        }
    }

    return (getImageComponent())
};