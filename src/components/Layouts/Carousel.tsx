'use client'

import {useState} from 'react';
import "./Carousel.css"
import Image from "next/image";
import {Button} from "../Inputs/Button";
import { Label } from "./Label";

export const Carousel = (props: {
    width: any,
    height: any,
    images: string[],
    previewMessage?: string,
    onClick?: (image: string) => void,
    additionalImageClasses?: string,
    additionalPreviewClasses?: string
}) => {
    const {
        width,
        height,
        images,
        previewMessage,
        onClick,
        additionalImageClasses,
        additionalPreviewClasses
    } = props

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="melody-relative" style={{ width, height }}>

            {previewMessage &&
              <div className={`melody-group melody-absolute melody-text-center melody-top-0 melody-bottom-0 melody-p-1 melody-text-white melody-cursor-pointer melody-left-0 melody-right-0 melody-z-10 melody-bg-primary-300 hover:melody-bg-primary-200 melody-bg-opacity-20 hover:melody-bg-opacity-70 ${additionalPreviewClasses ?? ""}`}
                   onClick={() => {
                       if (onClick) {
                           onClick(images[currentImageIndex])
                       }
                   }}>
                <div className={"melody-h-full melody-w-full melody-justify-center melody-items-center melody-flex melody-invisible group-hover:melody-visible"}>
                  <Label label={"Click To Preview"} bold={true} color={"white"} />
                </div>
              </div>
            }

            <Image className={`melody-object-cover melody-w-full melody-h-full ${additionalImageClasses ?? ""}`}
                   src={images[currentImageIndex]}
                   objectFit={"cover"}
                   onClick={() => {
                       if (onClick) {
                           onClick(images[currentImageIndex])
                       }
                   }}
                   fill={true}
                   alt={''} />

            {images.length > 1 &&
                <>
                  <div className={'melody-absolute melody-top-1/2 melody-left-2 melody-z-10 melody-transform -melody-translate-y-1/2'}>
                    <Button onClick={goToPreviousImage} icon={{ icon: 'arrowLeft' }} />
                  </div>

                  <div className={'melody-absolute melody-top-1/2 melody-right-2 melody-z-10 melody-transform -melody-translate-y-1/2'}>
                    <Button onClick={goToNextImage} icon={{ icon: 'arrowRight', rightAligned: true }} />
                  </div>
                </>
            }
        </div>
    )
}