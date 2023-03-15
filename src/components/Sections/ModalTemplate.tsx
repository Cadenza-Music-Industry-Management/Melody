import React, {Fragment, useRef} from 'react';
import "./ModalTemplate.css"
import { Dialog, Transition } from '@headlessui/react'
import {Button} from "../Inputs/Button";
import {ModalProps} from "../types";

export const ModalTemplate = (props: ModalProps) => {
    const {
        title,
        open,
        setOpen,
        children,
        footerContent,
        size = 'medium'
    } = props

    const cancelButtonRef = useRef(null)

    //TODO move to CSS file

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="melody-relative melody-z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                {/*Dark background of model*/}
                <Transition.Child
                    as={Fragment}
                    enter="melody-ease-out melody-duration-300"
                    enterFrom="melody-opacity-0"
                    enterTo="melody-opacity-100"
                    leave="melody-ease-in melody-duration-200"
                    leaveFrom="melody-opacity-100"
                    leaveTo="melody-opacity-0">
                    <div className="melody-fixed melody-inset-0 melody-bg-gray-500 melody-bg-opacity-75 melody-transition-opacity" />
                </Transition.Child>

                <div className="melody-fixed melody-inset-0 melody-z-10 melody-overflow-y-auto">
                    <div className="melody-flex melody-min-h-full melody-items-end melody-justify-center melody-p-4 melody-text-center sm:melody-items-center sm:melody-p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="melody-ease-out melody-duration-300"
                            enterFrom="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95"
                            enterTo="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leave="melody-ease-in melody-duration-200"
                            leaveFrom="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leaveTo="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95">
                            <Dialog.Panel className="melody-relative melody-transform melody-overflow-hidden melody-rounded-lg melody-bg-white melody-text-left melody-shadow-xl melody-transition-all melody-w-full sm:melody-my-8 sm:melody-max-w-lg md:melody-max-w-2xl">
                                {/*Header*/}
                                {/*TODO size variants would be set here at end of css for md: case*/}
                                <div className={`melody-bg-gray-50 melody-border-b-2 border-gray-600 melody-p-3 melody-rounded-t-lg melody-flex melody-flex-col sm:melody-flex-row melody-justify-between melody-items-center`}>
                                    <h2 className={`melody-text-lg melody-font-medium melody-mb-4 sm:melody-mb-0`}>{title}</h2>
                                    {/*TODO better variant for close button?*/}
                                    <Button color={'primary'}
                                            onClick={() => setOpen(false)}
                                            variant={'outlined'}
                                            icon={{
                                                icon: 'solidX',
                                                additionalStyles: {fontSize: 14}
                                            }} />
                                </div>

                                {/*Content*/}
                                <div className="melody-bg-white melody-px-4 melody-pt-5 melody-pb-4 sm:melody-p-6 sm:melody-pb-4">
                                    {children}
                                </div>

                                {/*/!*Footer*!/*/}
                                {/*{footerContent &&*/}
                                {/*    <div className=" melody-border-t-2 melody-bg-gray-50 melody-px-4 melody-py-3 sm:melody-flex sm:melody-flex-row-reverse sm:melody-px-6">*/}
                                {/*        {footerContent}*/}
                                {/*    </div>*/}
                                {/*}*/}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}