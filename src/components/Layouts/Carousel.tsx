import React, {useState} from 'react';
import "./Carousel.css"

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
                <img className="melody-object-cover melody-w-full melody-h-full"
                     src={images[currentImageIndex]}
                     style={{ width, height }}
                     alt="carousel" />
            </div>
            <div className="melody-absolute melody-inset-0 melody-flex melody-items-center melody-justify-center">
                <button className={`melody-p-2 melody-rounded-full melody-text-white melody-transition-colors melody-duration-200 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-blue-600 ${currentImageIndex === 0
                    ? "melody-opacity-50 melody-cursor-default"
                    : "melody-bg-gray-700 hover:melody-bg-gray-800 focus:melody-ring-gray-600"}`}
                        onClick={goToPreviousImage}>
                    Prev
                </button>
                <button className={`melody-p-2 melody-rounded-full melody-text-white melody-transition-colors melody-duration-200 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-blue-600 ${currentImageIndex === images.length - 1
                    ? "melody-opacity-50 melody-cursor-default"
                    : "melody-bg-gray-700 hover:melody-bg-gray-800 focus:melody-ring-gray-600"}`}
                        onClick={goToNextImage}>
                    Next
                </button>
            </div>
        </div>
    )
}