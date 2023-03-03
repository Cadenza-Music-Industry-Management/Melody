import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import "./ButtonMenu.css"
import { classNames } from "../../utils/functions";

export const ButtonMenu = (props: {
    // variant: string,
    size: string,
    label: string,
    items: string[] //TODO menu object with like onclick, etc...
}) => {
    const {
        // variant,
        size,
        label,
        items
    } = props

    return (
        <Menu as="div" className="melody-relative melody-inline-block melody-text-left">
            <div>
                <Menu.Button className="melody-inline-flex melody-w-full melody-justify-center melody-rounded-md melody-border melody-border-gray-300 melody-bg-white melody-px-4 melody-py-2 melody-text-sm melody-font-medium melody-text-gray-700 melody-shadow-sm hover:melody-bg-gray-50 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-indigo-500 focus:melody-ring-offset-2 focus:melody-ring-offset-gray-100">
                    Options
                    {/*TODO down icon*/}
                    <svg className="-melody-mr-1 melody-ml-2 melody-h-5 melody-w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"/>
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="melody-transition melody-ease-out melody-duration-100"
                enterFrom="melody-transform melody-opacity-0 melody-scale-95"
                enterTo="melody-transform opacity-100 melody-scale-100"
                leave="melody-transition melody-ease-in melody-duration-75"
                leaveFrom="melody-transform melody-opacity-100 melody-scale-100"
                leaveTo="melody-transform melody-opacity-0 melody-scale-95"
            >
                <Menu.Items className="melody-absolute melody-right-0 melody-z-10 melody-mt-2 melody-w-56 melody-origin-top-right melody-rounded-md melody-bg-white melody-shadow-lg melody-ring-1 melody-ring-black-0 melody-ring-opacity-5 focus:melody-outline-none">
                    <div className="melody-py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'melody-bg-gray-100 melody-text-gray-900' : 'melody-text-gray-700',
                                        'melody-block melody-px-4 melody-py-2 melody-text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'melody-bg-gray-100 melody-text-gray-900' : 'melody-text-gray-700',
                                        'melody-block melody-px-4 melody-py-2 melody-text-sm'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
