import React, { Fragment, useEffect, useState } from "react";
import { Avatar } from "@/components/Melody/src/components/Layouts/Avatar";
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { Transition } from "@headlessui/react";
import { useCloseOnClickAway } from "@/components/Melody/src/utils/hooks";
import { Group } from "@/constants/types";

export const OrganizationSelector = (props: {
    organization: Group | null,
    organizations: Group[] | null
    collapsed: boolean
}) => {

    const {
        organization,
        organizations,
        collapsed
    } = props
    
    const [showOrgSelector, setShowOrgSelector] = useState(false)
    const organizationSelectorRef = useCloseOnClickAway(toggleOpen)

    useEffect(() => {
        if (collapsed && showOrgSelector) setShowOrgSelector(false)
    }, [collapsed])

    //TODO this is not working with useCloseOnClickAway hook, if I add a log it sometimes works??????
    function toggleOpen() {
        if (showOrgSelector) setShowOrgSelector(!showOrgSelector)
    }

    function getGroupLayout(groupToDisplay: any, listItemIndex: number) {

        const orgLength = organizations ? organizations.length - 1 : 0
        let orgComponent = (
            <div className={`melody-flex melody-p-2 ${listItemIndex !== -1 ? 'hover:melody-bg-gray-200 melody-cursor-pointer' : ''} ${(listItemIndex !== -1 && listItemIndex !== orgLength) ? 'melody-border-b melody-border-b-gray-400' : ''}`}>
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
                    <Link href={`/dashboard/${groupToDisplay.groupUniqueId}`} key={listItemIndex}>
                        {orgComponent}
                    </Link>
                    :
                    <React.Fragment key={listItemIndex}>
                        {orgComponent}
                    </React.Fragment>
                }
            </>
        )
    }

    return (
        <>
            <div ref={organizationSelectorRef}
                 className={`melody-flex melody-bg-secondary-100 melody-text-white melody-rounded-lg melody-shadow melody-items-center ${!collapsed ? 'melody-cursor-pointer' : 'melody-justify-center'}`}
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
        </>
    )
}