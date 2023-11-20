import {Fragment, useRef} from 'react';
import "./ModalTemplate.css"
import { Dialog, Transition } from '@headlessui/react'
import {Button} from "../Inputs/Button";
import {ModalProps} from "../types";
import { Label } from "@/components/Melody/src/components/Layouts/Label";
export const ModalTemplate = (props: ModalProps) => {
    const {
        title,
        open,
        setOpen,
        children,
        size = 'medium',
        customZIndexClass
    } = props

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className={`melody-relative ${customZIndexClass ?? "melody-z-10"}`} initialFocus={cancelButtonRef} onClose={(value) => {
                if (setOpen) setOpen(value)
            }}>
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

                <div className={`melody-modal-fixed-container ${customZIndexClass ?? "melody-z-10"}`}>
                    <div className="melody-modal-container">
                        <Transition.Child
                            as={Fragment}
                            enter="melody-ease-out melody-duration-300"
                            enterFrom="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95"
                            enterTo="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leave="melody-ease-in melody-duration-200"
                            leaveFrom="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leaveTo="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95">
                            <Dialog.Panel className={`melody-modal-panel ${size}`}>
                                {/*Header*/}
                                <div className={'melody-modal-header'}>
                                    <div className={"melody-mb-4 sm:melody-mb-0"}>
                                        <Label label={title} mediumBold={true} size={"large"} />
                                    </div>

                                    {/*TODO better variant for close button?*/}
                                    {setOpen &&
                                      <Button onClick={() => {
                                          if (setOpen) setOpen(false)
                                      }} icon={{ icon: 'solidX', additionalStyles: { fontSize: 14 } }} />
                                    }
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