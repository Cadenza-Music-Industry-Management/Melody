import React from 'react';
import "./Breadcrumb.css"

export const Breadcrumb = (props: {
    size: string,
    variant: string
}) => {
    const {
        size,
        variant //transparent, light, dark, status colors?
    } = props

    //TODO dropdown in breadcrumb https://flowbite.com/docs/components/breadcrumb/#breadcrumb-with-dropdown

    return (
        <nav className="melody-flex melody-px-5 melody-py-3 melody-text-gray-700 melody-border melody-border-gray-200 melody-rounded-lg melody-bg-gray-50 dark:melody-bg-gray-800 dark:melody-border-gray-700"
             aria-label="Breadcrumb">
            <ol className="melody-inline-flex melody-items-center melody-space-x-1 md:melody-space-x-3">
                <li className="melody-inline-flex melody-items-center">
                    <a href="#"
                       className="melody-inline-flex melody-items-center melody-text-sm melody-font-medium melody-text-gray-700 hover:melody-text-blue-600 dark:melody-text-gray-400 dark:melody-hover:text-white">
                        <svg aria-hidden="true" className="melody-w-4 melody-h-4 melody-mr-2" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        A
                    </a>
                </li>
                <li>
                    <div className="melody-flex melody-items-center">
                        <svg aria-hidden="true" className="melody-w-6 melody-h-6 melody-text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <a href="#"
                           className="melody-ml-1 melody-text-sm melody-font-medium melody-text-gray-700 hover:melody-text-blue-600 md:melody-ml-2 dark:melody-text-gray-400 dark:hover:melody-text-white">
                            B
                        </a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="melody-flex melody-items-center">
                        <svg aria-hidden="true" className="melody-w-6 melody-h-6 melody-text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span
                            className="melody-ml-1 melody-text-sm melody-font-medium melody-text-gray-500 md:melody-ml-2 dark:melody-text-gray-400">
                            C
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}