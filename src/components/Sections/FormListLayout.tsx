import React from "react";
import "./FormListLayout.css"
import { FormListLayoutProps } from "@/components/Melody/src/components/types";
import { Label } from "@/components/Melody/src/components/Layouts/Label";
import { IconTooltip } from "@/components/Melody/src/components/Layouts/IconTooltip";

export const FormListLayout = (props: FormListLayoutProps) => {

    const {
        label,
        subLabel,
        footerComponent,
        items,
        tooltip
    } = props

    return (
        <div className="melody-overflow-hidden melody-bg-white melody-shadow melody-rounded-lg">
            <div className="melody-px-4 melody-py-5 sm:melody-px-6 melody-border-b melody-border-gray-300">
                <h3 className="melody-flex melody-gap-x-0.5 melody-text-lg melody-font-medium melody-leading-6 melody-text-gray-900">
                    {label}
                    {tooltip && <div className={"melody-pl-1"}><IconTooltip {...tooltip} /></div>}
                </h3>

                <p className="melody-mt-1 melody-max-w-2xl melody-text-sm melody-text-gray-500">
                    {subLabel}
                </p>
            </div>

            <div>
                {items.map((item, index) => (
                    <div key={index} className={`${index % 2 === 0 ? 'melody-bg-white' : 'melody-bg-gray-50'} melody-px-3 melody-py-4 sm:melody-grid sm:melody-grid-cols-3 sm:melody-gap-4 sm:melody-px-6`}>
                        <div className={"melody-items-center melody-flex"}>
                            {item.key}
                        </div>
                        <div className="melody-flex melody-items-center melody-mt-1 sm:melody-col-span-2 sm:melody-mt-0">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>

            {footerComponent &&
                <div className={"melody-border-t melody-border-gray-300"}>
                    {footerComponent}
                </div>
            }
        </div>
    );
};