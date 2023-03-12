import React from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import './NavigationBar.css';
import cadenzaMIMLogo from '../../assets/black_logo_mim.png'
import {Icon} from "../Layouts/Icon";
import {NavigationBarProps} from "../types";
import {Label} from "../Layouts/Label";
import {Avatar} from "../Layouts/Avatar";
import {Image} from '../Layouts/Image';
import { classNames } from "../../utils/functions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useProSidebar } from "react-pro-sidebar";

export const NavigationBar = (props: NavigationBarProps) => {

    const {
        navigation,
        userNavigation,
        user
    } = props

    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="melody-bg-gray-50 melody-border-b melody-border-primary-100 melody-p-1 melody-font-sans">
            {({ open }: { open: boolean }) => (
                <>
                    <div className="melody-mx-auto melody-px-2 sm:melody-px-4 lg:melody-px-8">
                        <div className="melody-relative melody-flex melody-h-16 melody-items-center melody-justify-between">

                            <div className="melody-absolute melody-inset-y-0 melody-left-0 melody-flex melody-items-center sm:melody-hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="melody-inline-flex melody-items-center melody-justify-center melody-rounded-lg melody-p-2
                            melody-text-gray-400 hover:melody-bg-gray-700 hover:melody-text-white focus:melody-outline-none focus:melody-ring-2
                            focus:melody-ring-inset focus:melody-ring-white">
                                    <span className="melody-sr-only">Open main menu</span>
                                    <Icon icon={open ? 'solidX' : 'solidBars'} additionalStyles={{}} />
                                </Disclosure.Button>
                            </div>

                            <div className="melody-flex melody-flex-1 melody-items-center melody-justify-center sm:melody-items-stretch sm:melody-justify-start">
                                <div className="melody-flex melody-flex-shrink-0 melody-items-center">
                                   <Link href={"/"}>
                                       <Image additionalClasses="melody-block melody-h-14 melody-w-auto lg:melody-melody-hidden"
                                              src={cadenzaMIMLogo}
                                              alt="Cadenza MIM" />
                                   </Link>
                                </div>
                            </div>

                            <div className="melody-absolute melody-inset-y-0 melody-right-0 melody-flex melody-items-center melody-pr-2 sm:melody-static sm:melody-inset-auto sm:melody-ml-6 sm:melody-pr-0">

                                <div className="melody-hidden sm:melody-mr-6 sm:melody-block md:melody-flex md:melody-items-center">
                                    <div className="melody-flex melody-space-x-4">
                                        {/*TODO implement onClick/<a logic between */}
                                        {navigation.map((item) => (
                                            <a key={item.name}
                                               href={item.href}
                                               className={classNames(
                                                   pathname === item.href ? 'melody-bg-primary-100 melody-text-white' : 'melody-text-gray-600 hover:melody-bg-gray-200',
                                                   'melody-px-3 melody-py-2 melody-rounded-lg melody-text-sm melody-font-medium'
                                               )}
                                               aria-current={pathname === item.href ? 'page' : undefined}>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/*TODO turn this into reusable icon dropdown component*/}
                                {/* Profile dropdown */}
                                {user &&
                                  <Menu as="div" className="melody-relative melody-ml-3">
                                    <div>
                                      <Menu.Button
                                        className="melody-flex melody-rounded-full melody-bg-gray-800 melody-text-sm focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-white focus:melody-ring-offset-2 focus:melody-ring-offset-gray-800">
                                        <span className="melody-sr-only">Open user menu</span>
                                        <Avatar image={user?.image} />
                                      </Menu.Button>
                                    </div>
                                    <Transition
                                      as={Fragment}
                                      enter="melody-transition melody-ease-out melody-duration-100"
                                      enterFrom="melody-transform melody-opacity-0 melody-scale-95"
                                      enterTo="melody-transform melody-opacity-100 melody-scale-100"
                                      leave="melody-transition melody-ease-in melody-duration-75"
                                      leaveFrom="melody-transform melody-opacity-100 melody-scale-100"
                                      leaveTo="melody-transform melody-opacity-0 melody-scale-95">
                                      <Menu.Items
                                        className="melody-absolute melody-right-0 melody-z-10 melody-mt-2 melody-w-48 melody-origin-top-right melody-rounded-lg melody-bg-white melody-py-1 melody-shadow-lg melody-ring-1 melody-ring-black-0 melody-ring-opacity-5 focus:melody-outline-none">

                                        <div className={'melody-p-2 melody-border-b melody-border-gray-200'}>
                                          <Label label={`${user.firstName} ${user.lastName}`} additionalStyles={{
                                              fontWeight: 'bold',
                                              lineHeight: 1
                                          }} />
                                          <Label label={user.username} size={'small'} />
                                        </div>

                                          {userNavigation.map((item) => (
                                              <Menu.Item key={item.name}>
                                                  {({ active }: { active: boolean }) => (
                                                      <>
                                                          {item.onClick ?
                                                              <span onClick={item.onClick}
                                                                    className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-cursor-pointer melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                                                  {item.name}
                                                              </span>
                                                            :
                                                              <a href={item.href}
                                                                 className={classNames(active ? 'melody-bg-gray-100 hover:melody-bg-gray-200' : '', 'melody-block melody-px-4 melody-py-2 melody-text-sm melody-text-gray-700 hover:melody-bg-gray-200')}>
                                                                  {item.name}
                                                              </a>
                                                          }
                                                      </>
                                                  )}
                                              </Menu.Item>
                                          ))}
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:melody-hidden">
                        <div className="melody-space-y-1 melody-px-2 melody-pt-2 melody-pb-3">
                            {/*TODO implement onClick/<a logic between */}
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        pathname === item.href ? 'melody-bg-primary-100 melody-text-white' : 'melody-text-gray-600 hover:melody-bg-gray-200',
                                        'melody-block melody-px-3 melody-py-2 melody-rounded-lg melody-text-base melody-font-medium'
                                    )}
                                    aria-current={pathname === item.href ? 'page' : undefined}>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}