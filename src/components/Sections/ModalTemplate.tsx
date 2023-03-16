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
                    <div className="melody-modal-bg-overlay" />
                </Transition.Child>

                <div className="melody-modal-fixed-container">
                    <div className="melody-modal-container">
                        <Transition.Child
                            as={Fragment}
                            enter="melody-ease-out melody-duration-300"
                            enterFrom="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95"
                            enterTo="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leave="melody-ease-in melody-duration-200"
                            leaveFrom="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leaveTo="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95">
                            {/*TODO size variants would be set here at end of css for md: case*/}
                            <Dialog.Panel className={`melody-modal-panel ${size}`}>
                                {/*Header*/}
                                <div className={'melody-modal-header'}>
                                    <h2 className={`melody-text-lg melody-font-medium melody-mb-4 sm:melody-mb-0`}>{title}</h2>
                                    {/*TODO better variant for close button?*/}
                                    <Button onClick={() => setOpen(false)}
                                            icon={{
                                                icon: 'solidX',
                                                additionalStyles: {fontSize: 14}
                                            }} />
                                </div>

                                {/*Content*/}
                                <div className="melody-modal-contents">
                                    {children}
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}