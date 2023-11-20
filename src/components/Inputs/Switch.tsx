'use client'

import { Switch as HeadlessSwitch } from '@headlessui/react'
import './Switch.css'
import {Label} from "../Layouts/Label";

export const Switch = (props: {
    // variant: string,
    size: string,
    label: string,
    value: boolean,
    onChange: (checked: boolean) => void
}) => {
    const {
        // variant,
        size,
        label,
        value,
        onChange
    } = props

    return (
        <div className="melody-py-2">
            {label && <Label htmlFor={"switch"} label={label} />}

            <HeadlessSwitch
                id={"switch"}
                checked={value}
                onChange={onChange}
                className={`${value ? 'melody-bg-accent-100' : 'melody-bg-gray-200'} melody-relative melody-inline-flex melody-h-[38px] melody-w-[74px] melody-shrink-0 melody-cursor-pointer melody-rounded-full melody-border-2 melody-border-transparent melody-transition-colors melody-duration-200 melody-ease-in-out focus:melody-outline-none focus-visible:melody-ring-2 focus-visible:melody-ring-white focus-visible:melody-ring-opacity-75`}>

                {/*TODO why is this needed*/}
                <span className="melody-sr-only" />

                <span aria-hidden="true"
                      className={`${value ? 'melody-translate-x-9' : 'melody-translate-x-0'} melody-pointer-events-none melody-inline-block melody-h-[34px] melody-w-[34px] melody-transform melody-rounded-full melody-bg-white melody-shadow-main melody-ring-0 melody-transition melody-duration-200 melody-ease-in-out`} />

            </HeadlessSwitch>
        </div>
    )
}