import React from 'react';
import "./Avatar.css"
import Image from "next/image";

export const Avatar = (props: {
    size?: string,
    image: string | undefined,
    rounded?: boolean,
    ring?: boolean
}) => {
    const {
        size = 'medium',
        image,
        rounded = true,
        ring = true
    } = props

    //TODO props like adding ring, size, variant (could this be ring?)?

    return (
        <>
            {image ?
                <Image className={`melody-avatar ${size} ${rounded && 'melody-rounded-full'} ${ring && 'ring'}`}
                       src={image} alt="Bordered avatar" />
                :
                <div className={`melody-avatar-preview ${rounded && 'melody-rounded-full'} ${ring && 'ring'}`}>
                    <svg fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd" />
                    </svg>
                </div>
            }
        </>

    )
}