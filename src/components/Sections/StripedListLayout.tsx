import React from 'react';
import "./StripedListLayout.css"

export const StripedListLayout = (props: {
    size: string,
    label: string,
    subLabel: string
}) => {
    const {
        size,
        label,
        subLabel
    } = props

    return (
        <div className="melody-overflow-hidden melody-bg-white melody-shadow sm:melody-rounded-lg">
            <div className="melody-px-4 melody-py-5 sm:melody-px-6">
                <h3 className="melody-text-lg melody-font-medium melody-leading-6 melody-text-gray-900">
                    {label}
                </h3>

                <p className="melody-mt-1 melody-max-w-2xl melody-text-sm melody-text-gray-500">
                    {subLabel}
                </p>
            </div>
            <div className="melody-border-t melody-border-gray-200">
                <dl>
                    <div className="melody-bg-gray-50 melody-px-4 melody-py-5 sm:melody-grid sm:melody-grid-cols-3 sm:melody-gap-4 sm:melody-px-6">
                        <dt className="melody-text-sm melody-font-medium melody-text-gray-500">Group Name</dt>
                        <dd className="melody-mt-1 melody-text-sm melody-text-gray-900 sm:melody-col-span-2 sm:melody-mt-0">TLS Records</dd>
                    </div>
                    <div className="melody-bg-white melody-px-4 melody-py-5 sm:melody-grid sm:melody-grid-cols-3 sm:melody-gap-4 sm:melody-px-6">
                        <dt className="melody-text-sm melody-font-medium melody-text-gray-500">Group Type</dt>
                        <dd className="melody-mt-1 melody-text-sm melody-text-gray-900 sm:melody-col-span-2 sm:melody-mt-0">Record Label</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};