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