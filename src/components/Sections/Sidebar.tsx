import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { AddIconProps } from "@/components/Melody/src/components/types";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
    menuClasses,
    MenuItemStyles,
} from "react-pro-sidebar";

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
};

const theme = {
    sidebar: {
        backgroundColor: '#ffffff',
        color: '#607489',
    },
    menu: {
        menuContent: '#fbfcfd',
        icon: '#0098e5',
        hover: {
            backgroundColor: '#c5e4ff',
            color: '#44596e',
        },
        disabled: {
            color: '#9fb6cf',
        },
    },
};

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

    const { collapseSidebar, collapsed } = useProSidebar()

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: theme.menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: theme.menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({ level }) => ({
            backgroundColor:
                level === 0
                    ? hexToRgba(theme.menu.menuContent, 1)
                    : 'transparent',
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: theme.menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(theme.menu.hover.backgroundColor, 1),
                color: theme.menu.hover.color,
            },
        },
        label: ({ open }) => ({
            fontWeight: open ? 600 : undefined,
        }),
    }

    function generateMenuItem(link: SidebarLinkProps) {

        //TODO need href/onClick logic

        //TODO need to check types for menu, title, text, or separator

        let icon = <span></span>
        if (link.icon) icon = <Icon icon={link.icon.icon}
                                    containerType={link.icon.containerType}
                                    additionalStyles={link.icon.additionalStyles}
                                    additionalClasses={link.icon.additionalClasses} />

        if (link.children) {
            return <SubMenu label={link.title} icon={icon}>
                {link.children.map(link => generateMenuItem(link))}
            </SubMenu>
        } else {
            return <MenuItem icon={icon}>
                {link.title}
            </MenuItem>
        }
    }

    //TODO icons not rendering correct

    return (
        <ProSidebar
            breakPoint="lg"
            backgroundColor={hexToRgba(theme.sidebar.backgroundColor, 1)}
            rootStyles={{
                color: theme.sidebar.color,
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                {/*HEADER*/}
                <div className={"melody-p-2 melody-text-right"}>

                </div>

                {/*CONTENT*/}
                <div style={{ flex: 1, marginBottom: '32px' }}>

                    <div className={"melody-p-2 melody-text-center"}>
                        <h1 style={{opacity: collapsed ? 0 : 0.7}}>
                            Group details and groups dropdown selector
                        </h1>
                    </div>

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