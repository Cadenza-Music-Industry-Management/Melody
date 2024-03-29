'use client'

import { Button } from "../Inputs/Button";
import {
    Sidebar as ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    useProSidebar,
    menuClasses,
    MenuItemStyles
} from "react-pro-sidebar";
import {Icon} from "../Layouts/Icon"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { checkPathnameForSidebar } from "../../utils/functions";
import { Tooltip } from "../Layouts/Tooltip";
import Image from "next/image";
import { SidebarProps } from "../types";

export const Sidebar = (props: SidebarProps) => {

    const {
        links,
        organization,
        logo,
        collapsedLogo,
        logoAltText
    } = props

    const pathname = usePathname()
    const { collapseSidebar, collapsed, toggleSidebar, toggled, broken } = useProSidebar()

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: 13,
            fontWeight: 400
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        icon: ({ active, open }) => ({
            color: (active || open) ? '#0C192C' : '#FFFFFF'
        }),
        subMenuContent: ({ level, active }) => ({
            overflow: 'hidden',
            borderRadius: 10,
            backgroundColor: '#0C192C'
        }),
        button: ({  active , open, isSubmenu }) => ({
            [`&.${menuClasses.disabled}`]: {
                color: '#9fb6cf',
            },
            '&:hover': {
                color: '#0C192C',
                backgroundColor: 'rgb(213,221,236)', //TODO should use better tailwind color for this instead of a random one we selected
                borderRadius: 10
            },
            margin: 2,
            border: 0,
            borderRadius: 10,
            height: 40,
            backgroundColor: (active && !isSubmenu) ? '#FFFFFF' : (open || (active && isSubmenu)) ? '#e0e0e0' : '#0C192C',
            color: (active || open) ? '#0C192C' : '#FFFFFF'
        }),
        label: ({ open }) => ({
            fontWeight: open ? 800 : undefined,
        }),
    }

    function closePopupWhenItemIsClicked(onClick: any) {
        //TODO currently having a z-index issue where slideover is not allowing sidebar to be clicked when broken (mobile) even though it has higher z-index,
        // so just closing sidebar for now when onclick is triggered
        if (broken) toggleSidebar()
        onClick()
    }

    //TODO SidebarLinkProps
    function generateMenuItem(link: any, rootLevel: boolean, index: string) {

        switch (link.type) {
            case 'menu':
                let icon = <span />
                if (link.icon) icon = <Icon icon={link.icon.icon}
                                            additionalStyles={link.icon.additionalStyles} />

                let component;
                if (link.href) {
                    component = <Link href={link.href} />
                } else if (link.onClick) {
                    component = <div onClick={() => closePopupWhenItemIsClicked(link.onClick)} />
                }

                if (link.children) {
                    const childrenComponents = link.children.map((link: any, childIndex: any) => generateMenuItem(link, false, `index-${index}-child-${childIndex}`))
                    const childIsSelected = childrenComponents.some((child: any) => {
                        return child.props.active ?? false
                    })

                    return <SubMenu label={link.title}
                                    icon={icon}
                                    component={component}
                                    active={childIsSelected}
                                    className={`${rootLevel ? "" : ""}`}>
                        {childrenComponents}
                    </SubMenu>
                } else {
                    return <MenuItem key={index} disabled={link.disabled?.value} icon={icon} component={component} active={(link.selected !== undefined || link.onClick) ? (link.selected ?? false) : checkPathnameForSidebar(pathname, organization?.groupUniqueId, link.href ?? "")} className={rootLevel ? "" : ""}>
                        {/*TODO disabled correctly but cursor not passed through so tooltip doesn't work yet*/}
                        {!link.disabled || !link.disabled?.value ?
                            <div className={"melody-flex melody-items-center"}>
                                {link.title}
                                {link.trailerComponent}
                            </div>
                            :
                            <Tooltip message={link.disabled?.message ?? 'You don\'t have the needed permission'}>
                                {/*TODO this has weird overlap z-index issue*/}
                                <div className={"melody-flex melody-items-center"}>
                                    {link.title}
                                    {link.trailerComponent}
                                </div>
                            </Tooltip>
                            }
                    </MenuItem>
                }
            case 'title':
                return <div className={"melody-bg-primary-100 melody-rounded-[15px] melody-m-1"}>
                    <p className={"melody-text-lg melody-font-bold melody-p-3"}>
                        {link.title}
                    </p>
                </div>
            case 'text':
                return <div className={"melody-bg-primary-100 melody-rounded-[15px] melody-m-1"}>
                    <p className={"melody-text-xs melody-p-1"}>
                        {link.title}
                    </p>
                </div>
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
                            disabled={link.disabled?.value ?? false}
                            variant={'outlined'}
                            color={'white'} />
                </div>
        }
    }

    return (
       <>
           {broken &&
               <div className={"melody-fixed melody-bottom-1 melody-left-1 melody-z-10"}>
                 <Button label={'Sidebar'}
                         icon={{ icon: 'plus', rightAligned: true }}
                         additionalStyles={{ border: "2px solid white" }}
                         onClick={() => toggleSidebar(!toggled)} />
               </div>
           }

           <ProSidebar
               breakPoint="md"
               backgroundColor={"#0C192C"}
               width={"300px"}
               collapsedWidth={"125px"}
               rootStyles={{ color: "white", borderRight: "1px solid white", zIndex: 11 }}>
               <div className={"melody-flex melody-flex-col melody-h-full"}>

                   {/*Header*/}
                   <div className={"melody-p-2 melody-relative melody-flex melody-justify-center melody-items-center"}>
                       <Link href={"/"}>
                           <Image width={collapsed ? 50 : 150}
                                  height={collapsed ? 50 : 150}
                                  src={collapsed ? collapsedLogo : logo}
                                  alt={logoAltText ?? ""} />
                       </Link>
                   </div>

                   {/*Content*/}
                   <div className={"melody-flex-1 melody-mb-6 melody-px-6 melody-pt-12"}>
                       <Menu menuItemStyles={menuItemStyles}>
                           {links.map((link, index) => generateMenuItem(link, true, `index-${index}`))}
                       </Menu>
                   </div>

                   {/*Footer*/}
                   <div className={`melody-p-2 melody-flex melody-gap-x-1 melody-gap-y-1 melody-justify-end melody-border-t melody-border-gray-300 ${collapsed ? 'melody-text-center melody-flex-col' : 'melody-text-right melody-flex-row'}`}>
                       <Button variant={'solid'}
                               icon={{
                                   icon: collapsed ? 'caretRight' : 'caretLeft'
                               }}
                               color={'white'}
                               onClick={() => collapseSidebar(!collapsed)} />
                   </div>

               </div>
           </ProSidebar>
       </>
    );
}