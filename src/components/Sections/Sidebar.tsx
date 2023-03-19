import { AddIconProps } from "../types";
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

type SidebarLinkProps = {
    type: string,
    title?: string,
    href?: string,
    onClick?: () => void, //open slideover for example
    icon?: AddIconProps,
    children?: SidebarLinkProps[]
};

type SidebarProps = {
    links: SidebarLinkProps[],
    organization?: any, //TODO need type from Cadenza
    organizations?: any[] //TODO need type from Cadenza
}

export const Sidebar = (props: SidebarProps) => {

    let {
        links,
        organization,
        organizations
    } = props

    const { collapseSidebar, collapsed } = useProSidebar()
    const [showOrgSelector, setShowOrgSelector] = useState(false)

    useEffect(() => {
        if (collapsed && showOrgSelector) setShowOrgSelector(false)
    }, [collapsed])

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: 13,
            fontWeight: 400,
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        //TODO this isnt working for changing icon to white
        icon: ({ active, open }) => ({
            fill: (active || open) ? '#FFFFFF' : '0C192C', //TODO once font working for custom icons, can remove this line
            color: (active || open) ? '#FFFFFF' : '0C192C'
        }),
        subMenuContent: ({ level, active }) => ({
            backgroundColor: active ? '#0C192C' : level === 0 ? '#fbfcfd' : 'transparent',
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

    function generateMenuItem(link: SidebarLinkProps) {

        //TODO icon not changing color on hover. Broken on Cadenza and Storybook :(

        switch (link.type) {
            case 'menu':
                let icon = <span />
                if (link.icon) icon = <Icon icon={link.icon.icon}
                                            containerType={link.icon.containerType}
                                            additionalStyles={link.icon.additionalStyles}
                                            additionalClasses={'hover:melody-text-white'} />

                //TODO for link, need to append current dashboard path name and add link.href to end
                let component;
                if (link.href) {
                    component = <Link href={link.href} />
                } else if (link.onClick) {
                    component = <div onClick={link.onClick} />
                }

                if (link.children) {
                    return <SubMenu label={link.title} icon={icon} component={component}>
                        {link.children.map(link => generateMenuItem(link))}
                    </SubMenu>
                } else {
                    return <MenuItem icon={icon} component={component}>
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
        }
    }

    function getGroupLayout(groupToDisplay: any, listItemIndex: number) {

        const orgComponent = (
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
        <ProSidebar
            breakPoint="lg"
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
                <div className={"melody-flex-1 melody-mb-6"}>
                    <Menu menuItemStyles={menuItemStyles}>
                        {links.map(link => generateMenuItem(link))}
                    </Menu>
                </div>

                {/*FOOTER*/}
                <div className={`melody-p-2 melody-border-t melody-border-gray-300 ${collapsed ? 'melody-text-center' : 'melody-text-right'}`}>
                    <Button variant={'outlined'}
                            icon={{
                                icon: collapsed ? 'caretRight' : 'caretLeft'
                            }}
                            color={'primary'}
                            onClick={() => collapseSidebar(!collapsed)} />
                </div>

            </div>
        </ProSidebar>
    );
}