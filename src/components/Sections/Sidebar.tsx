"use client"

import { Button } from "../Inputs/Button";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
    menuClasses,
    MenuItemStyles,
} from "react-pro-sidebar";
import {Avatar} from "../Layouts/Avatar"
import {Icon} from "../Layouts/Icon"
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
//import { SidebarLinkProps } from "@/constants/types";

type SidebarProps = {
    links: any[], //TODO need type from cadenza SidebarLinkProps
    organization?: any, //TODO need type from Cadenza
    organizations?: any[] //TODO need type from Cadenza
}

export const Sidebar = (props: SidebarProps) => {

    let {
        links,
        organization,
        organizations
    } = props

    const pathname = usePathname()
    const { collapseSidebar, collapsed, toggleSidebar, toggled, broken } = useProSidebar()
    const [showOrgSelector, setShowOrgSelector] = useState(false)

    useEffect(() => {
        if (collapsed && showOrgSelector) setShowOrgSelector(false)
    }, [collapsed])

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: 13,
            fontWeight: 400
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        //TODO this isn't working for changing icon to white
        icon: ({ active, open }) => ({
            fill: (active || open) ? '#FFFFFF' : '0C192C', //TODO once font working for custom icons, can remove this line
            color: (active || open) ? '#FFFFFF' : '0C192C'
        }),
        subMenuContent: ({ level, active }) => ({
            backgroundColor: active ? '#0C192C' : level === 0 ? '#fbfcfd' : '#FFFFFF',
        }),
        button: ({  active , open }) => ({
            [`&.${menuClasses.disabled}`]: {
                color: '#9fb6cf',
            },
            '&:hover': {
                backgroundColor: '#cdcdcd'
            },
            backgroundColor: active ? '#1B3B6B' : open ? '#0C192C' : '#FFFFFF',
            color: (active || open) ? '#FFFFFF' : '#0C192C'
        }),
        label: ({ open }) => ({
            fontWeight: open ? 800 : undefined,
        }),
    }

    //TODO SidebarLinkProps
    function generateMenuItem(link: any, rootLevel: boolean, index: string) {

        //TODO icon not changing color on hover. Broken on Cadenza and Storybook :(

        switch (link.type) {
            case 'menu':
                let icon = <span />
                if (link.icon) icon = <Icon icon={link.icon.icon}
                                            additionalStyles={link.icon.additionalStyles}
                                            additionalClasses={'hover:melody-text-white'} />

                let component;
                if (link.href) {
                    component = <Link href={link.href} />
                } else if (link.onClick) {
                    component = <div onClick={link.onClick} />
                }

                if (link.children) {
                    //TODO need to set active submenu prop if its open or any children are active
                    return <SubMenu label={link.title} icon={icon} component={component} className={rootLevel ? "melody-border-b melody-border-b-gray-300" : ""}>
                        {link.children.map((link: any, childIndex: any) => generateMenuItem(link, false, `index-${index}-child-${childIndex}`))}
                    </SubMenu>
                } else {
                    //TODO selection logic is broken, check settings tab for example (payment tab selected and default settings is selected)
                    //Note: usePathname() returns string, but fails with possibly null in build
                    return <MenuItem icon={icon} component={component} active={(link.selected !== undefined || link.onClick) ? (link.selected ?? false) : (pathname?.includes(link.href ?? "") ?? false)} className={rootLevel ? "melody-border-b melody-border-b-gray-300" : ""}>
                        {link.title}
                    </MenuItem>
                }
            case 'title':
                return <p className={"melody-text-lg melody-font-bold melody-p-3"}>
                    {link.title}
                </p>
            case 'text':
                return <p className={"melody-text-sm melody-p-1"}>
                    {link.title}
                </p>
            case 'separator':
                return <div className={"melody-p-3"}>
                    <hr className={"melody-bg-primary-100 melody-h-[2px]"} />
                </div>
            case 'button':
                return <div className={"melody-p-3 melody-text-center melody-w-full"}>
                    <Button label={link.title ?? ""}
                            icon={link.icon}
                            onClick={link.onClick ?? undefined}
                            size={'small'}
                            variant={'outlined'}
                            color={'primary'} />
                </div>
        }
    }

    function getGroupLayout(groupToDisplay: any, listItemIndex: number) {

        let orgComponent;

        if (organizations) {
            orgComponent = (
                <div className={`melody-flex melody-p-2 ${listItemIndex !== -1 ? 'hover:melody-bg-gray-200 melody-cursor-pointer' : ''} ${(listItemIndex !== -1 && listItemIndex !== organizations?.length  - 1) ? 'melody-border-b melody-border-b-gray-400' : ''}`}>
                    <Avatar image={groupToDisplay?.icon} />

                    {!collapsed &&
                      <div className={"melody-p-1 melody-text-left"}>
                        <p className={"melody-text-sm melody-font-bold"}>
                            {groupToDisplay?.name}
                        </p>
                        <p className={`melody-text-sm ${listItemIndex !== -1 ? 'melody-text-gray-600' : 'melody-text-gray-100'}`}>
                          @{groupToDisplay?.groupUniqueId}
                        </p>
                        <p className={`melody-text-xs ${listItemIndex !== -1 ? 'melody-text-gray-600' : 'melody-text-gray-100'}`}>
                            {groupToDisplay?.groupType}
                        </p>
                      </div>
                    }
                </div>
            )
        }

        return (
            <>
                {listItemIndex !== -1 ?
                    <Link href={`/dashboard/${groupToDisplay.groupUniqueId}`}>
                        {orgComponent}
                    </Link>
                    :
                    orgComponent
                }
            </>
        )
    }

    return (
       <>
           {broken &&
               <div className={"melody-fixed melody-bottom-1 melody-left-1"}>
                 <Button label={'Sidebar'} icon={{ icon: 'plus', rightAligned: true }} onClick={() => toggleSidebar(!toggled)} />
               </div>
           }

           <ProSidebar
               breakPoint="md"
               backgroundColor={"#FFFFFF"}
               width={"300px"}
               rootStyles={{ color: "#0C192C", borderRight: "1px solid #0C192C" }}>
               <div className={"melody-flex melody-flex-col melody-h-full"}>

                   {/*HEADER*/}
                   <div className={"melody-p-2 melody-relative"}>
                       <div className={`melody-flex melody-bg-secondary-100 melody-text-white melody-rounded-lg melody-shadow melody-items-center ${!collapsed ? 'melody-cursor-pointer' : 'melody-justify-center'}`}
                            onClick={() => !collapsed && setShowOrgSelector(!showOrgSelector)}>
                           {getGroupLayout(organization, -1)}

                           {!collapsed &&
                             <div className={"melody-ml-auto melody-pr-2"}>
                               <Icon icon={'caretUp'} />
                               <Icon icon={'caretDown'} />
                             </div>
                           }
                       </div>

                       {/*TODO if we click outside this area, we should close popup too*/}
                       <Transition
                           as={Fragment}
                           show={showOrgSelector}
                           enter="melody-transition melody-ease-out melody-duration-100"
                           enterFrom="melody-transform melody-opacity-0 melody-scale-95"
                           enterTo="melody-transform opacity-100 melody-scale-100"
                           leave="melody-transition melody-ease-in melody-duration-75"
                           leaveFrom="melody-transform melody-opacity-100 melody-scale-100"
                           leaveTo="melody-transform melody-opacity-0 melody-scale-95">
                           <div className={"melody-absolute melody-z-10 melody-bg-white melody-border melody-border-gray-300 melody-w-[275px] melody-rounded-lg melody-shadow melody-mt-1 melody-ml-1"}>
                               {organizations?.map((groupToSelect, index) => getGroupLayout(groupToSelect, index))}

                               {organizations?.length === 0 &&
                                 <p className={"melody-p-4 melody-font-bold melody-text-center melody-text-sm"}>
                                   User is not part of any other organization
                                 </p>
                               }
                           </div>
                       </Transition>
                   </div>

                   {/*CONTENT*/}
                   <div className={"melody-flex-1 melody-mb-6 melody-bg-white"}>
                       <Menu menuItemStyles={menuItemStyles}>
                           {links.map((link, index) => generateMenuItem(link, true, `index-${index}`))}
                       </Menu>
                   </div>

                   {/*FOOTER*/}
                   <div className={`melody-p-2 melody-flex melody-gap-x-1 melody-gap-y-1 melody-justify-end melody-border-t melody-border-gray-300 ${collapsed ? 'melody-text-center melody-flex-col' : 'melody-text-right melody-flex-row'}`}>
                       <Button variant={'outlined'}
                               icon={{
                                   icon: collapsed ? 'caretRight' : 'caretLeft'
                               }}
                               color={'primary'}
                               onClick={() => collapseSidebar(!collapsed)} />

                       {/*TODO fix later with weird width*/}
                       {/*{broken &&*/}
                       {/*  <Button variant={'outlined'}*/}
                       {/*          icon={{ icon: 'solidX' }}*/}
                       {/*          color={'primary'}*/}
                       {/*          onClick={() => toggleSidebar(false)} />*/}
                       {/*}*/}
                   </div>

               </div>
           </ProSidebar>
       </>
    );
}