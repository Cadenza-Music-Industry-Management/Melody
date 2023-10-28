import { Fragment, useRef, useState } from "react";
import { Avatar } from "@/components/Melody/src/components/Layouts/Avatar";
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { Transition } from "@headlessui/react";
import { Group, GroupList } from "@/constants/types";
import { useClickOutside } from "@/components/Melody/src/utils/hooks";

export const OrganizationSelector = (props: {
    organization: Group | null,
    organizations: GroupList[]
}) => {

    const {
        organization,
        organizations
    } = props

    const organizationSelectorRef = useRef<any>(null)
    const [showOrgSelector, setShowOrgSelector] = useState(false)
    useClickOutside(organizationSelectorRef, () => toggleOpen(showOrgSelector))

    function toggleOpen(selectorOpen: boolean) {
        if (selectorOpen) setShowOrgSelector(false)
    }

    function getGroupLayout(groupToDisplay: any, listItemIndex: number) {

        const orgLength = organizations ? organizations.length - 1 : 0
        let orgComponent = (
            <div className={`melody-flex melody-items-center melody-p-1 ${listItemIndex !== -1 ? 'hover:melody-bg-gray-200 melody-cursor-pointer' : ''} ${(listItemIndex !== -1 && listItemIndex !== orgLength) ? 'melody-border-b melody-border-b-gray-400' : ''}`}>
                <Avatar image={groupToDisplay?.icon} />

                  <div className={"melody-p-1 melody-pl-2 melody-text-left"}>
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
            </div>
        )

        return (
            <>
                {listItemIndex !== -1 ?
                    <Link href={`/dashboard/${groupToDisplay.groupUniqueId}`} key={listItemIndex}>
                        {orgComponent}
                    </Link>
                    :
                    <Fragment key={listItemIndex}>
                        {orgComponent}
                    </Fragment>
                }
            </>
        )
    }

    return (
        <>
            <div ref={organizationSelectorRef}
                 className={`melody-flex melody-bg-secondary-100 melody-text-white melody-rounded-lg melody-shadow-main melody-items-center melody-cursor-pointer`}
                 onClick={() => setShowOrgSelector(!showOrgSelector)}>
                {getGroupLayout(organization, -1)}


                  <div className={"melody-ml-auto melody-pr-2"}>
                    <Icon icon={'caretUp'} />
                    <Icon icon={'caretDown'} />
                  </div>
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
                <div className={"melody-absolute melody-z-10 melody-bg-white melody-border melody-border-gray-300 melody-w-[275px] melody-rounded-lg melody-shadow-main melody-mt-1 melody-ml-1"}>
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