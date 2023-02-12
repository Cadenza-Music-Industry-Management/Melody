import React from 'react';
import "./TextArea.css"

export const TextArea = (props: {
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
            <label htmlFor="textArea" className="melody-block melody-mb-2 melody-text-sm melody-font-medium melody-text-gray-900 dark:melody-text-white">
                {label}
            </label>
            <textarea id="textArea"
                      rows={4}
                      value={value}
                      className="melody-block melody-p-2.5 melody-w-full melody-text-sm melody-text-gray-900 melody-bg-gray-50 melody-rounded-lg melody-border melody-border-gray-300 focus:melody-ring-blue-500 focus:melody-border-blue-500 dark:melody-bg-gray-700 dark:melody-border-gray-600 dark:melody-placeholder-gray-400 dark:melody-text-white dark:focus:melody-ring-blue-500 dark:focus:melody-border-blue-500"
                      placeholder="Placeholder text" />
        </div>
    );
};