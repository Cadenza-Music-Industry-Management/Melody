import { Disclosure } from '@headlessui/react'
import './NavigationBar.css';
import {Icon} from "../Layouts/Icon";
import {NavigationBarProps} from "../types";
import {Label} from "../Layouts/Label";
import {Avatar} from "../Layouts/Avatar";
import Image from 'next/image';
import { classNames } from "../../utils/functions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ButtonMenu } from "@/components/Melody/src/components/Inputs/ButtonMenu";

export const NavigationBar = (props: NavigationBarProps) => {

    const {
        navigation,
        userNavigation,
        user,
        homepage = false,
        fixed = false,
        icon
    } = props

    const pathname = usePathname()

    function checkURL(url: string) {
        if (pathname) { //Note: usePathname() returns string, but fails with possibly null in build
            if (url === "/") {
                return url === pathname
            } else {
                return pathname.includes(url)
            }
        }
    }

    return (
        <Disclosure as="nav" className={`${homepage ? "" : "melody-bg-white melody-shadow-main"} ${fixed ? "melody-fixed melody-w-full" : "melody-relative"} melody-p-1 melody-z-10`}>
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
                                    <Icon icon={open ? 'solidX' : 'solidBars'} />
                                </Disclosure.Button>
                            </div>

                            {!homepage && icon &&
                            <div className="melody-flex melody-flex-1 melody-items-center melody-justify-center sm:melody-items-stretch sm:melody-justify-start">
                                <div className="melody-flex melody-flex-shrink-0 melody-items-center">
                                   <Link href={"/"}>
                                       <Image width={150}
                                              height={150}
                                              src={icon}
                                              alt="Navigation Bar Logo" />
                                   </Link>
                                </div>
                            </div>
                            }

                            <div className="melody-absolute melody-inset-y-0 melody-right-0 melody-flex melody-items-center melody-pr-2 sm:melody-static sm:melody-inset-auto sm:melody-pr-0 sm:melody-ml-auto">

                                <div className="melody-hidden sm:melody-mr-6 sm:melody-block md:melody-flex md:melody-items-center">
                                    <div className="melody-flex melody-space-x-4">
                                        {/*TODO implement onClick/<a logic between */}
                                        {navigation.map((item) => (
                                            <a key={item.name}
                                               href={item.href}
                                               className={classNames(
                                                   checkURL(item.href ?? "no-href")  ? 'melody-bg-primary-100 melody-text-white' : `${homepage ? "melody-text-white hover:melody-text-gray-600" : "melody-text-gray-600"} hover:melody-bg-gray-200`,
                                                   'melody-px-3 melody-py-2 melody-rounded-lg melody-text-sm melody-font-medium'
                                               )}
                                               aria-current={checkURL(item.href ?? "no-href") ? 'page' : undefined}>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Profile dropdown */}
                                {user &&
                                    <ButtonMenu buttonContents={<>
                                        <span className="melody-sr-only">Open user menu</span>
                                        <Avatar image={user?.image} />
                                    </>} dropdownHeaderItem={
                                        <div className={'melody-p-2 melody-border-b melody-border-gray-200'}>
                                            <Label label={`${user.firstName} ${user.lastName}`} additionalStyles={{
                                                fontWeight: 'bold',
                                                lineHeight: 1
                                            }} />
                                            <Label label={user.username} size={'small'} />
                                        </div>
                                    } items={userNavigation}
                                    additionalClasses={"melody-ml-3"} />
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:melody-hidden">
                        <div className="melody-space-y-1 melody-px-2 melody-pt-2 melody-pb-3 melody-bg-gray-50 melody-absolute melody-left-1 melody-right-1 melody-rounded">
                           <div>
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
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}