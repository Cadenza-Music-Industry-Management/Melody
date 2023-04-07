import React from 'react';
import "./Banner.css"
import Link from "next/link";

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
        <div className="melody-relative melody-isolate melody-flex melody-items-center melody-gap-x-6 melody-overflow-hidden melody-bg-gray-50 melody-py-2.5 melody-px-6 sm:melody-px-3.5 sm:before:melody-flex-1 melody-bg-gray-100">

            <div className="melody-flex melody-flex-wrap melody-items-center melody-gap-y-2 melody-gap-x-4">
                <p className="melody-text-sm melody-leading-6 melody-text-gray-900 melody-flex melody-items-center">
                    <p className="melody-font-semibold">
                        {label}
                    </p>
                    <svg viewBox="0 0 2 2" className="melody-mx-2 melody-h-0.5 melody-w-0.5 melody-fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    {subLabel}
                </p>
                <Link href="#"
                      className="melody-flex-none melody-rounded-full melody-bg-gray-900 melody-py-1 melody-px-3.5 melody-text-sm melody-font-semibold melody-text-white melody-shadow-sm hover:melody-bg-gray-700 focus-visible:melody-outline focus-visible:melody-outline-2 focus-visible:melody-outline-offset-2 focus-visible:melody-outline-gray-900">
                    Register now <span aria-hidden="true">&rarr;</span>
                </Link>
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