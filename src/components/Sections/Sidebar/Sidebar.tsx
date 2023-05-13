"use client"

import { Button } from "../../Inputs/Button";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
    menuClasses,
    MenuItemStyles,
} from "react-pro-sidebar";
import {Icon} from "../../Layouts/Icon"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OrganizationSelector } from "@/components/Melody/src/components/Sections/Sidebar/OrganizationSelector";
import { Group, GroupList, SidebarLinkProps } from "@/constants/types";

type SidebarProps = {
    links: SidebarLinkProps[],
    organization: Group | null,
    organizations: GroupList[]
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
                       <OrganizationSelector organization={organization}
                                             organizations={organizations}
                                             collapsed={collapsed} />
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