'use client'

import "./StackedAvatars.css"

export const StackedAvatars = (props: {
    size: string,
    images: (string | undefined)[]
}) => {
    const {
        size,
        images
    } = props

    //TODO props like adding ring, size, variant (could this be ring?)?

    //TODO +99 box is smaller because of border vs ring on images

    return (
        <div className="melody-flex -melody-space-x-2 melody-overflow-hidden">
            <img
                className="melody-inline-block melody-h-10 melody-w-10 melody-rounded-full melody-ring-2 melody-ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <img
                className="melody-inline-block melody-h-10 melody-w-10 melody-rounded-full melody-ring-2 melody-ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
        {/*    TODO if over limit add button of popup with remaining user icons */}
            <a className="melody-flex melody-items-center melody-justify-center melody-w-10 melody-h-10 melody-text-xs melody-font-medium melody-text-white melody-bg-gray-700 melody-border-2 melody-border-white melody-rounded-full hover:melody-bg-gray-600 dark:melody-border-gray-800"
               href="#">+99</a>
        </div>
    )
}