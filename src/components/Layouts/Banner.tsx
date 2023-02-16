import React from 'react';
import "./Banner.css"

export const Banner = (props: {
    label: string,
    subLabel: string,
    //TODO button text/action (or if button event present, maybe nullable object?)
}) => {
    const {
        label,
        subLabel
    } = props

    return (
        <div className="melody-relative melody-isolate melody-flex melody-items-center melody-gap-x-6 melody-overflow-hidden melody-bg-gray-50 melody-py-2.5 melody-px-6 sm:melody-px-3.5 sm:before:melody-flex-1">
            <svg
                viewBox="0 0 577 310"
                aria-hidden="true"
                className="melody-absolute melody-top-1/2 melody-left-[max(-7rem,calc(50%-52rem))] -melody-z-10 melody-w-[36.0625rem] -melody-translate-y-1/2 melody-transform-gpu melody-blur-2xl"
            >
                <path
                    id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
                    fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
                    fillOpacity=".3"
                    d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
                />
                <defs>
                    <linearGradient
                        id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
                        x1="614.778"
                        x2="-42.453"
                        y1="26.617"
                        y2="96.115"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                viewBox="0 0 577 310"
                aria-hidden="true"
                className="melody-absolute melody-top-1/2 melody-left-[max(45rem,calc(50%+8rem))] -melody-z-10 melody-w-[36.0625rem] -melody-translate-y-1/2 melody-transform-gpu melody-blur-2xl"
            >
                <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
            </svg>
            <div className="melody-flex melody-flex-wrap melody-items-center melody-gap-y-2 melody-gap-x-4">
                <p className="melody-text-sm melody-leading-6 melody-text-gray-900 melody-flex melody-items-center">
                    <strong className="melody-font-semibold">
                        {label}
                    </strong>
                    <svg viewBox="0 0 2 2" className="melody-mx-2 melody-h-0.5 melody-w-0.5 melody-fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    {subLabel}
                </p>
                <a href="#"
                   className="melody-flex-none melody-rounded-full melody-bg-gray-900 melody-py-1 melody-px-3.5 melody-text-sm melody-font-semibold melody-text-white melody-shadow-sm hover:melody-bg-gray-700 focus-visible:melody-outline focus-visible:melody-outline-2 focus-visible:melody-outline-offset-2 focus-visible:melody-outline-gray-900">
                    Register now <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            <div className="melody-flex melody-flex-1 melody-justify-end">
                <button type="button" className="-melody-m-3 melody-p-3 focus-visible:melody-outline-offset-[-4px]">
                    <span className="melody-sr-only">Dismiss</span>
                    {/*TODO button to dismiss banner present, internal state to hide?*/}
                    X
                </button>
            </div>
        </div>
    )
}