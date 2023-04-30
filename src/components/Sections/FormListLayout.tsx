import React, { ReactNode } from "react";
import "./StripedListLayout.css"

//TODO move to interface types file
export const FormListLayout = (props: {
    label: string,
    subLabel: string,
    footerComponent?: ReactNode,
    items: {
        key: ReactNode,
        value: ReactNode
    }[] //UseFieldArrayProps
}) => {
    const {
        label,
        subLabel,
        footerComponent,
        items
    } = props

    return (
        <div className="melody-overflow-hidden melody-bg-white melody-shadow melody-rounded-lg">
            <div className="melody-px-4 melody-py-5 sm:melody-px-6 melody-border-b melody-border-gray-400">
                <h3 className="melody-text-lg melody-font-medium melody-leading-6 melody-text-gray-900">
                    {label}
                </h3>

                <p className="melody-mt-1 melody-max-w-2xl melody-text-sm melody-text-gray-500">
                    {subLabel}
                </p>
            </div>

            <div>
                {items.map((item, index) => (
                    <div key={index} className={`${index % 2 === 0 ? 'melody-bg-white' : 'melody-bg-gray-50'} melody-px-4 melody-py-5 sm:melody-grid sm:melody-grid-cols-3 sm:melody-gap-4 sm:melody-px-6`}>
                        <div className={"melody-items-center melody-flex"}>
                            {item.key}
                        </div>
                        <div className="melody-mt-1 sm:melody-col-span-2 sm:melody-mt-0">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>

            {footerComponent &&
                <div className={"melody-border-t melody-border-gray-400"}>
                    {footerComponent}
                </div>
            }
        </div>
    );
};