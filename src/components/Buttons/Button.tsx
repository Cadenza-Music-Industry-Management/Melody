import React, { useMemo } from 'react';
import "./Button.css"

const getSizeClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'melody-px-4 melody-py-2.5';
        }
        case 'large': {
            return 'melody-px-6 melody-py-3';
        }
        default: {
            return 'melody-px-5 melody-py-2.5';
        }
    }
};

const getModeClasses = (isPrimary: boolean) => isPrimary
        ? 'melody-text-white melody-bg-pink melody-border-pink dark:melody-bg-purple dark:melody-border-purple'
        : 'melody-text-slate melody-bg-gray-50 melody-border-slate dark:melody-text-white dark:melody-border-white';

const BASE_BUTTON_CLASSES = 'melody-cursor-pointer melody-rounded-full melody-border-2 melody-font-bold melody-leading-none melody-inline-block';

export const Button = (props: {
    primary: boolean,
    size: string,
    label: string
}) => {
    const {
        primary,
        size,
        label
    } = props

    const computedClasses = useMemo(() => {
        const modeClass = getModeClasses(primary);
        const sizeClass = getSizeClasses(size);

        return [modeClass, sizeClass].join(' ');
    }, [primary, size]);

    return (
        <button type="button" className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}>
            {label}
        </button>
    );
};