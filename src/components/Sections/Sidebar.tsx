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
import React, { useEffect, useState } from "react";
import Link from "next/link";

type SidebarLinkProps = {
    type: string,
    title?: string,
    href?: string,
    onClick?: () => void, //open slideover for example
    icon?: AddIconProps,
    children?: SidebarLinkProps[]
};

type SidebarProps = {
    links: SidebarLinkProps[]
}

//TODO we have our own function of this, bring to utils?
// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Sidebar = (props: SidebarProps) => {

    const {
        links
    } = props

    //TODO temp group object
    const group: any = {
        groupName: 'The Landing Strip Records',
        groupUniqueId: 'tlsrecords',
        icon: 'https://cadenzamim.com/static/media/black_icon.65d98686b4a6aec00d0a.png',
        groupType: 'Record Label'
    }

    const groupsToSelect: any[] = [
        {
            groupName: 'Group 1',
            groupUniqueId: 'group1',
            icon: 'https://cadenzamim.com/static/media/black_icon.65d98686b4a6aec00d0a.png',
            groupType: 'Record Label'
        },
        {
            groupName: 'Group 2',
            groupUniqueId: 'group2',
            icon: 'https://cadenzamim.com/static/media/black_icon.65d98686b4a6aec00d0a.png',
            groupType: 'Artist'
        }
    ]

    const { collapseSidebar, collapsed } = useProSidebar()
    const [showOrgSelector, setShowOrgSelector] = useState(false)

    useEffect(() => {
        if (collapsed && showOrgSelector) setShowOrgSelector(false)
    }, [collapsed])

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? "#fbfcfd"
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: '#9fb6cf',
            },
            '&:hover': {
                backgroundColor: hexToRgba('#0C192C', 1),
                color: '#FFFFFF',
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 800 : undefined,
        }),
    }

    function generateMenuItem(link: SidebarLinkProps) {

        //TODO need href/onClick logic

        //TODO icon not changing color on storybook hover, but hopefully just way we are loading svgs in webpack?

        switch (link.type) {
            case 'menu':
                let icon = <span />
                if (link.icon) icon = <Icon icon={link.icon.icon}
                                            containerType={link.icon.containerType}
                                            additionalStyles={link.icon.additionalStyles}
                                            additionalClasses={'hover:melody-text-white'} />

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

    //TODO need group type
    function getGroupLayout(groupToDisplay: any) {
        return (
            <div className={"melody-flex"}>
                <Avatar image={groupToDisplay?.icon} />
                <div className={"melody-p-1"}>
                    <p className={"melody-text-sm melody-font-bold"}>
                        {groupToDisplay?.groupName}
                    </p>
                    <p className={"melody-text-sm melody-text-gray-600"}>
                        @{groupToDisplay?.groupUniqueId}
                    </p>
                    <p className={"melody-text-xs melody-text-gray-600"}>
                        {groupToDisplay?.groupType}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <ProSidebar
            breakPoint="lg"
            backgroundColor={"#FFFFFF"}
            width={"300px"}
            rootStyles={{ color: "#0C192C" }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                {/*HEADER*/}
                <div className={"melody-p-2 melody-relative"}>
                    <div className={`melody-flex melody-p-1 melody-bg-white melody-rounded-lg melody-shadow melody-items-center ${!collapsed ? 'melody-cursor-pointer' : ''}`}
                         onClick={() => !collapsed && setShowOrgSelector(!showOrgSelector)}>
                        {getGroupLayout(group)}

                        <div className={"melody-ml-auto melody-pr-1"}>
                            <Icon icon={'caretUp'} additionalClasses={'melody-text-primary-100'} />
                            <Icon icon={'caretDown'} additionalClasses={'melody-text-primary-100'} />
                        </div>
                    </div>

                    {showOrgSelector &&
                        <div className={"melody-absolute melody-z-10 melody-bg-white melody-border melody-border-gray-300 melody-w-[275px] melody-rounded-lg melody-shadow melody-p-2 melody-mt-1 melody-ml-1"}>
                            {/*TODO need list of groups with group details and link to other dashboard*/}
                            {groupsToSelect.map(groupToSelect => getGroupLayout(groupToSelect))}
                        </div>
                    }
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