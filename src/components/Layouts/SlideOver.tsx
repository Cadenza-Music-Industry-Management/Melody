import React, { Fragment } from 'react';
import "./SlideOver.css"
import { Dialog, Transition } from '@headlessui/react'

export const SlideOver = (props: {
    title: string,
    open: boolean,
    setOpen: (open: boolean) => void
}) => {
    const {
        title,
        open,
        setOpen
    } = props

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="melody-relative melody-z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="melody-ease-in-out melody-duration-500"
                    enterFrom="melody-opacity-0"
                    enterTo="melody-opacity-100"
                    leave="melody-ease-in-out melody-duration-500"
                    leaveFrom="melody-opacity-100"
                    leaveTo="melody-opacity-0">
                    <div className="melody-fixed melody-inset-0 melody-bg-gray-500 melody-bg-opacity-75 melody-transition-opacity" />
                </Transition.Child>

                <div className="melody-fixed melody-inset-0 melody-overflow-hidden">
                    <div className="melody-absolute melody-inset-0 melody-overflow-hidden">
                        <div className="melody-pointer-events-none melody-fixed melody-inset-y-0 melody-right-0 melody-flex melody-max-w-full melody-pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="melody-transform melody-transition melody-ease-in-out melody-duration-500 sm:melody-duration-700"
                                enterFrom="melody-translate-x-full"
                                enterTo="melody-translate-x-0"
                                leave="melody-transform melody-transition melody-ease-in-out melody-duration-500 sm:melody-duration-700"
                                leaveFrom="melody-translate-x-0"
                                leaveTo="melody-translate-x-full">
                                <Dialog.Panel className="melody-pointer-events-auto melody-w-screen melody-max-w-md">
                                    <div className="melody-flex h-full melody-flex-col melody-overflow-y-scroll melody-bg-white melody-shadow-xl">
                                        <div className="melody-flex-1 melody-overflow-y-auto melody-py-6 melody-px-4 sm:melody-px-6">
                                            <div className="melody-flex melody-items-start melody-justify-between">
                                                <Dialog.Title className="melody-text-lg melody-font-medium melody-text-gray-900">
                                                    {title}
                                                </Dialog.Title>

                                                <div className="melody-ml-3 melody-flex melody-h-7 melody-items-center">
                                                    <button type="button"
                                                            className="-melody-m-2 melody-p-2 melody-text-gray-400 hover:melody-text-gray-500"
                                                            onClick={() => setOpen(false)}>
                                                        <span className="melody-sr-only">Close panel</span>
                                                        {/*TODO X / close icon*/}
                                                        X
                                                    </button>
                                                </div>
                                            </div>

                                            {/*TODO contents*/}
                                            <div className="melody-mt-8">
                                                <div className="melody-flow-root">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}