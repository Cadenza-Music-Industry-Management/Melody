import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import "./ButtonMenu.css"
import { classNames } from "../../utils/functions";
import { ButtonMenuProps } from "@/components/Melody/src/components/types";

export const ButtonMenu = (props: ButtonMenuProps) => {
    const {
        size = 'medium', //TODO
        buttonContents,
        dropdownHeaderItem,
        items
    } = props

    return (
        <Menu as="div" className="melody-relative melody-ml-3">
            <div>
                <Menu.Button className="melody-flex melody-rounded-full melody-text-sm focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-white focus:melody-ring-offset-2 focus:melody-ring-offset-gray-800">
                    {buttonContents}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="melody-transition melody-ease-out melody-duration-100"
                enterFrom="melody-transform melody-opacity-0 melody-scale-95"
                enterTo="melody-transform opacity-100 melody-scale-100"
                leave="melody-transition melody-ease-in melody-duration-75"
                leaveFrom="melody-transform melody-opacity-100 melody-scale-100"
                leaveTo="melody-transform melody-opacity-0 melody-scale-95">
                <Menu.Items className="melody-absolute melody-right-0 melody-z-10 melody-mt-2 melody-w-48 melody-origin-top-right melody-rounded-lg melody-bg-white melody-py-1 melody-shadow-lg melody-ring-1 melody-ring-black-0 melody-ring-opacity-5 focus:melody-outline-none">

                    {dropdownHeaderItem}

                    {items.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }: { active: boolean }) => (
                                <>
                                    {item.onClick ?
                                        <span onClick={item.onClick}
                                              className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-cursor-pointer melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                            {item.name}
                                            {item.trailerComponent}
                                        </span>
                                        :
                                        <a href={item.href}
                                           className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                            {item.name}
                                            {item.trailerComponent}
                                        </a>
                                    }
                                </>
                            )}
                        </Menu.Item>
                    ))}

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
