'use client'

import "./Alert.css"

export const Alert = (props: {
    variant: string,
    size: string,
    text: string
}) => {
    const {
        variant,
        size,
        text
    } = props

    return (
        <div className={`melody-alert ${variant} ${size}`}
             role="alert">
            {/*TODO replace with icon*/}
            <svg aria-hidden="true" className="melody-flex-shrink-0 melody-inline melody-w-5 melody-h-5 melody-mr-3" fill="currentColor"
                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"></path>
            </svg>
            {/*<span className="melody-sr-only">Info</span>*/}
            <div>
                {text}
            </div>
        </div>
    );
};