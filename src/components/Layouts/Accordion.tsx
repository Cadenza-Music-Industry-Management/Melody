import React from 'react';
import "./Accordion.css"
import {Disclosure, Transition} from '@headlessui/react'

export const Accordion = (props: {
    size: string
}) => {
    const {
        size
    } = props

    return (
        <div className="melody-w-full melody-px-4 melody-pt-16">
            <div className="melody-mx-auto melody-w-full melody-max-w-md melody-rounded-2xl melody-bg-white melody-p-2">
                {/*TODO   Render a `div` for the root `Disclosure` component
                <Disclosure as="div">*/}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="melody-flex melody-w-full melody-justify-between melody-rounded-lg melody-bg-purple-100 melody-px-4 melody-py-2 melody-text-left melody-text-sm melody-font-medium melody-text-purple-900 hover:melody-bg-purple-200 focus:melody-outline-none focus-visible:melody-ring focus-visible:melody-ring-purple-500 focus-visible:melody-ring-opacity-75">
                                <span>What is your refund policy?</span>
                                {/*TODO*/}
                                <svg className={`${
                                    open ? 'melody-rotate-180 melody-transform' : ''
                                } melody-text-purple-500 melody-mr-1 melody-ml-2 melody-h-5 melody-w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </Disclosure.Button>

                            <Transition
                                enter="melody-transition melody-duration-100 melody-melody-ease-out"
                                enterFrom="melody-transform melody-scale-95 melody-opacity-0"
                                enterTo="melody-transform melody-scale-100 melody-opacity-100"
                                leave="melody-transition melody-duration-75 melody-ease-out"
                                leaveFrom="melody-transform melody-scale-100 melody-opacity-100"
                                leaveTo="melody-transform melody-scale-95 melody-opacity-0"
                            >
                                <Disclosure.Panel className="melody-px-4 melody-pt-4 melody-pb-2 melody-text-sm melody-text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}