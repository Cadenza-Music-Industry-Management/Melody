import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import "./ButtonMenu.css"
import { classNames } from "../../utils/functions";
import { ButtonMenuProps, NavBarItemProps } from "@/components/Melody/src/components/types";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

export const ButtonMenu = (props: ButtonMenuProps) => {
    const {
        size = 'medium',
        color = 'primary',
        variant = 'solid',
        buttonContents,
        dropdownHeaderItem,
        items,
        additionalClasses,
        label
    } = props

    function getItemDetails(item: NavBarItemProps) {
        return <>
            {item.name}
            {item.trailerComponent}
            {item.icon && <div className={"melody-pl-1"}><Icon icon={item.icon} /></div>}
        </>
    }

    return (
        <Menu as="div" className={`melody-relative ${additionalClasses ?? ''}`}>
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className={"melody-bg-transparent"}>
                            {buttonContents ?? <Button color={color}
                                                       variant={variant}
                                                       size={size}
                                                       label={label}
                                                       icon={{ icon: open ? 'caretUp' : 'caretDown', rightAligned: true }} />}
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
                                            {item.disabled ?
                                                <div className={'melody-cursor-pointer melody-flex melody-items-center melody-px-4 melody-py-2 melody-text-sm melody-text-gray-800 melody-cursor-not-allowed'}>
                                                    {getItemDetails(item)}
                                                </div>
                                                : item.onClick ?
                                                    <div onClick={item.onClick}
                                                          className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-cursor-pointer melody-flex melody-items-center melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                                        {getItemDetails(item)}
                                                    </div>
                                                    :
                                                    <Link href={item.href ?? ""}
                                                          className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-cursor-pointer melody-flex melody-items-center melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                                        {getItemDetails(item)}
                                                    </Link>
                                            }
                                        </>
                                    )}
                                </Menu.Item>
                            ))}

                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
