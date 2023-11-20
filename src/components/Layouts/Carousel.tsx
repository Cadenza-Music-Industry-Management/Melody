'use client'

import {useState} from 'react';
import "./Carousel.css"
import Image from "next/image";
import {Button} from "../Inputs/Button";

export const Carousel = (props: {
    width: any,
    height: any,
    images: string[]
}) => {
    const {
        width,
        height,
        images
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

    //TODO not styling very well, buttons sit in center instead of left/right side

    return (
        <div className="melody-relative">
            <div className="melody-aspect-w-16 melody-aspect-h-9" style={{
                width,
                height
            }}>
                <Image className="melody-object-cover melody-w-full melody-h-full"
                       src={images[currentImageIndex]}
                       fill={true}
                       alt="carousel" />
            </div>

            <div className={'melody-absolute melody-top-1/2 melody-left-2 melody-z-10 melody-transform -melody-translate-y-1/2'}>
                <Button onClick={goToPreviousImage} icon={{ icon: 'arrowLeft' }} />
            </div>
            <div className={'melody-absolute melody-top-1/2 melody-right-2 melody-z-10 melody-transform -melody-translate-y-1/2'}>
                <Button onClick={goToNextImage} icon={{ icon: 'arrowRight', rightAligned: true }} />
            </div>
        </div>
    )
}