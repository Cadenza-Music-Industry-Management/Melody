import { Fragment, ReactNode } from "react";
import "./SlideOver.css"
import { Dialog, Transition } from '@headlessui/react'
import { Button } from "@/components/Melody/src/components/Inputs/Button";

export const SlideOver = (props: {
    title: string,
    open: boolean,
    setOpen: (open: boolean) => void,
    children: ReactNode,
    widthClassName?: string
}) => {
    const {
        title,
        open,
        setOpen,
        children,
        widthClassName
    } = props

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="melody-slide-over-dialog" onClose={(value) => {
                //TODO this is being fired with modal template on close is being triggered?
                setOpen(value)
            }}>
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

                <div className="melody-slide-over-parent">
                    {/*TODO this div needed below? What should class name be if so?*/}
                    <div className="melody-absolute melody-inset-0 melody-overflow-hidden">
                        <div className="melody-slide-over-container">
                            <Transition.Child
                                as={Fragment}
                                enter="melody-transform melody-transition melody-ease-in-out melody-duration-500 sm:melody-duration-700"
                                enterFrom="melody-translate-x-full"
                                enterTo="melody-translate-x-0"
                                leave="melody-transform melody-transition melody-ease-in-out melody-duration-500 sm:melody-duration-700"
                                leaveFrom="melody-translate-x-0"
                                leaveTo="melody-translate-x-full">

                                <Dialog.Panel className={`melody-slide-over-dialog-panel ${widthClassName ?? 'melody-max-w-md'}`}>
                                    <div className="melody-slide-over-dialog-panel-container">
                                        <div className="melody-slide-over-header">
                                            {/*TODO label props*/}
                                            <Dialog.Title className="melody-text-lg melody-font-bold">
                                                {title}
                                            </Dialog.Title>

                                            <div className="melody-ml-3 melody-flex melody-h-7 melody-items-center">
                                                <Button icon={{ icon: "solidX" }} onClick={() => setOpen(false)} />
                                            </div>
                                        </div>

                                        <div className="melody-p-4 melody-overflow-y-auto melody-h-full">
                                            <div className="melody-flow-root">
                                                {children}
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