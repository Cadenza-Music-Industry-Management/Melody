'use client'

import { ReactNode } from "react";
import "./TextPlaceholder.css"

const lineObjects: {
    line: ReactNode
}[] = [
    {
        line: <div className="melody-flex melody-items-center melody-w-full melody-space-x-2">
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-32"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-24"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
        </div>
    },
    {
        line: <div className="melody-flex melody-items-center melody-w-full melody-space-x-2 melody-max-w-[480px]">
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-24"></div>
        </div>
    },
    {
        line: <div className="melody-flex melody-items-center w-full melody-space-x-2 melody-max-w-[400px]">
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-80"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
        </div>
    },
    {
        line: <div className="melody-flex melody-items-center w-full melody-space-x-2 melody-max-w-[480px]">
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-24"></div>
        </div>
    },
    {
        line: <div className="melody-flex melody-items-center w-full melody-space-x-2 melody-max-w-[440px]">
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-32"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-24"></div>
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-full"></div>
        </div>
    },
    {
        line: <div className="melody-flex melody-items-center melody-w-full melody-space-x-2 melody-max-w-[360px]">
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
            <div className="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 melody-w-80"></div>
            <div className="melody-h-2.5 melody-bg-gray-300 melody-rounded-full dark:melody-bg-gray-600 melody-w-full"></div>
        </div>
    },
]

export const TextPlaceholder = (props: {
    variant: string,
    size: string,
    lines?: number
}) => {
    const {
        variant,
        size,
        lines = 6
    } = props

    //TODO widget placeholder https://flowbite.com/docs/components/skeleton/#widget-placeholder

    //TODO variant = 'blurb'?
    //<div role="status" class="max-w-sm animate-pulse">
    //     <div class="melody-h-2.5 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 w-48 mb-4"></div>
    //     <div class="melody-h-2 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 max-w-[360px] mb-2.5"></div>
    //     <div class="melody-h-2 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 mb-2.5"></div>
    //     <div class="melody-h-2 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 max-w-[330px] mb-2.5"></div>
    //     <div class="melody-h-2 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 max-w-[300px] mb-2.5"></div>
    //     <div class="melody-h-2 melody-bg-gray-200 melody-rounded-full dark:melody-bg-gray-700 max-w-[360px]"></div>
    //     <span class="melody-sr-only">Loading...</span>
    // </div>

    //variant = 'paragraph'
    return (
        <div role="status" className="melody-space-y-2.5 melody-animate-pulse melody-max-w-lg">

            {Array.from(Array(lines).keys()).map(_ => {
                const randomIndex: any = Math.floor(Math.random() * lines)
                const randomLine: { line: ReactNode } = lineObjects[randomIndex]
                return randomLine?.line
            })}

            <span className="melody-sr-only">Loading...</span>
        </div>
    );
};