import React from 'react';
import "./TextInput.css"

//TODO sizes https://flowbite.com/docs/components/forms/#input-sizes

export const TextInput = (props: {
    variant: string,
    size: string,
    label: string,
    value: string
}) => {
    const {
        variant,
        size,
        label,
        value
    } = props

    //TODO for add-on and trailing components https://tailwindui.com/components/preview#component-2607d970262ada86428f063c72b1e7bd
    //TODO and another example for add-on here like our current design
    // <div className="mt-1 flex rounded-md shadow-sm">
    //                         <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
    //                           http://
    //                         </span>
    //                         <input
    //                           type="text"
    //                           name="company-website"
    //                           id="company-website"
    //                           className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //                           placeholder="www.example.com"
    //                         />
    //                       </div>

    return (
        <div>
            <label htmlFor="textInput" className="melody-block melody-mb-2 melody-text-sm melody-font-medium melody-text-gray-900 dark:melody-text-white">
                {label}
            </label>
            <input type="text" //TODO - type prop
                   value={value}
                   id="textInput"
                   className="melody-bg-gray-50 melody-border melody-border-gray-300 melody-text-gray-900 melody-text-sm melody-rounded-lg focus:melody-ring-blue-500 focus:melody-border-blue-500 melody-block melody-w-full melody-p-2.5 dark:melody-bg-gray-700 dark:melody-border-gray-600 dark:melody-placeholder-gray-400 dark:melody-text-white dark:focus:melody-ring-blue-500 dark:focus:melody-border-blue-500"/>
        </div>
    );
};