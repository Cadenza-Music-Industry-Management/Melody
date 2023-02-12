import React from 'react';
import "./Avatar.css"

export const Avatar = (props: {
    size: string,
    image: string | undefined
}) => {
    const {
        size,
        image
    } = props

    //TODO props like adding ring, size, variant (could this be ring?)?

    return (
        <>
            {image ?
                <img className="melody-w-10 melody-h-10 p-1 melody-rounded-full melody-ring-2 melody-ring-gray-300 dark:melody-ring-gray-500"
                     src={image} alt="Bordered avatar" />
                :
                <div className="melody-relative melody-w-10 melody-h-10 melody-overflow-hidden melody-bg-gray-100 melody-rounded-full dark:melody-bg-gray-600">
                    <svg className="melody-absolute melody-w-12 melody-h-12 melody-text-gray-400 -melody-left-1" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>
            }
        </>

    )
}