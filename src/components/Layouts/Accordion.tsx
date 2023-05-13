import React, {ReactNode} from 'react';
import "./Accordion.css"
import {Disclosure, Transition} from '@headlessui/react'
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

interface AccordionButtonProps {
    title?: string,
    variant?: string,
    size?: string,
    customComponent?: ReactNode
}

export const Accordion = (props: {
    accordionButton: AccordionButtonProps,
    children: ReactNode
}) => {

    const {
        accordionButton,
        children
    } = props

    //TODO variants for different colors for primary, secondary, white?, transparent?

    //TODO this currently makes the button and children appear next to each other, need to have like custom hook that returns the button component that activates Accordion and then Accordion in separate field. So we can have in seperate places

    function getAccordionButton(open: boolean) {

        //TODO variant

        if (accordionButton.customComponent) {
            return accordionButton.customComponent
        } else {
            return (
                <Disclosure.Button className={`melody-accordion ${accordionButton.variant ?? 'secondary'} ${accordionButton.size ?? 'medium'}`}>
                    <span>{accordionButton.title}</span>
                    <Icon icon={open ? "caretDown" : "caretRight"} additionalClasses={`melody-h-5 melody-w-5`} />
                </Disclosure.Button>
            )
        }
    }

    function getAccordionContents() {
        return (
            <Transition enter="melody-transition melody-duration-100 melody-melody-ease-out"
                        enterFrom="melody-transform melody-scale-95 melody-opacity-0"
                        enterTo="melody-transform melody-scale-100 melody-opacity-100"
                        leave="melody-transition melody-duration-75 melody-ease-out"
                        leaveFrom="melody-transform melody-scale-100 melody-opacity-100"
                        leaveTo="melody-transform melody-scale-95 melody-opacity-0">
                <Disclosure.Panel className="melody-px-2 melody-py-2">
                    {children}
                </Disclosure.Panel>
            </Transition>
        )
    }

    return (
        <div className="melody-mx-auto melody-w-full melody-rounded-2xl melody-bg-white melody-p-1">
            {/*TODO   Render a `div` for the root `Disclosure` component
            <Disclosure as="div">*/}
            <Disclosure>
                {({ open }) => (
                    <>
                        {getAccordionButton(open)}
                        {getAccordionContents()}
                    </>
                )}
            </Disclosure>
        </div>
    )
}