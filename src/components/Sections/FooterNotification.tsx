'use client'

import { ReactNode } from "react";

export function FooterNotification(props: {
    visible: boolean,
    title?: string,
    backgroundClass?: string,
    subComponent: ReactNode
}) {

    const {
        visible,
        title,
        backgroundClass= "melody-bg-secondary-100",
        subComponent
    } = props

    return (
        <div className={`melody-fixed melody-bottom-0 melody-left-0 melody-w-full ${backgroundClass} melody-text-white melody-z-[1000] ${visible ? 'melody-block' : 'melody-hidden'}`}>
            <div className="melody-container melody-mx-auto melody-p-2">
                <div className="flex justify-between items-center">
                    <div>
                        {title && <h2 className="melody-text-lg melody-font-semibold">{title}</h2>}
                        {subComponent}
                    </div>

                {/*    TODO button here custom text for "accept"*/}

                </div>
            </div>
        </div>
    )
}