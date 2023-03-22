import React, {useState} from 'react';
import "./Carousel.css"
import Image from "next/image";

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
            <div className="melody-aspect-w-16 melody-aspect-h-9">
                <Image className="melody-object-cover melody-w-full melody-h-full"
                       src={images[currentImageIndex]}
                       style={{ width, height }}
                       alt="carousel" />
            </div>

            {/*TODO turn into melody buttons wrapped with absolute divs*/}
            <button className={`melody-absolute melody-top-1/2 melody-left-2 melody-z-10 melody-transform -melody-translate-y-1/2 melody-p-2 melody-rounded-full melody-text-white melody-transition-colors melody-duration-200 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-blue-600 melody-bg-gray-700 hover:melody-bg-gray-800 focus:melody-ring-gray-600`}
                    onClick={goToPreviousImage}>
                Prev
            </button>
            <button className={`melody-absolute melody-top-1/2 melody-right-2 melody-z-10 melody-transform -melody-translate-y-1/2 melody-p-2 melody-rounded-full melody-text-white melody-transition-colors melody-duration-200 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-blue-600 melody-bg-gray-700 hover:melody-bg-gray-800 focus:melody-ring-gray-600`}
                    onClick={goToNextImage}>
                Next
            </button>
        </div>
    )
}