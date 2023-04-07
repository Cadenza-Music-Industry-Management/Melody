import { SVGProps, useState} from 'react'
import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react'
import './RadioGroup.css'

const options = [
    {
        name: 'A',
        description: 'test'
    },
    {
        name: 'B',
        description: 'test'
    },
    {
        name: 'C',
        description: 'test'
    },
]

export const RadioGroup = (props: {
    variant: string,
    size: string,
    label: string
}) => {
    const {
        variant,
        size,
        label
    } = props
    const [selected, setSelected] = useState(options[0])

    return (
        <div className="melody-w-full melody-px-4 melody-py-16">
            <div className="melody-mx-auto melody-w-full melody-max-w-md">
                <HeadlessRadioGroup value={selected} onChange={setSelected}>
                    <HeadlessRadioGroup.Label className="melody-sr-only">
                        {label}
                    </HeadlessRadioGroup.Label>

                    <div className="melody-space-y-2">
                        {options.map((option) => (
                            <HeadlessRadioGroup.Option
                                key={option.name}
                                value={option}
                                className={({active, checked}) => `${active ? 'melody-ring-2 melody-ring-white melody-ring-opacity-60 melody-ring-offset-2 melody-ring-offset-sky-300' : ''} ${checked ? 'melody-bg-sky-900 melody-bg-opacity-75 melody-text-white' : 'melody-bg-white'} melody-relative melody-flex melody-cursor-pointer melody-rounded-lg melody-px-5 melody-py-4 melody-shadow-md focus:melody-outline-none`}>
                                {({active, checked}) => (
                                    <>
                                        <div className="melody-flex melody-w-full melody-items-center melody-justify-between">
                                            <div className="melody-flex melody-items-center">
                                                <div className="melody-text-sm">
                                                    <HeadlessRadioGroup.Label
                                                        as="p"
                                                        className={`melody-font-medium  ${
                                                            checked ? 'melody-text-white' : 'melody-text-gray-900'
                                                        }`}>
                                                        {option.name}
                                                    </HeadlessRadioGroup.Label>
                                                    <HeadlessRadioGroup.Description
                                                        as="span"
                                                        className={`melody-inline ${
                                                            checked ? 'melody-text-sky-100' : 'melody-text-gray-500'
                                                        }`}>
                                                        <p>
                                                            {option.description}
                                                        </p>{' '}
                                                    </HeadlessRadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="melody-shrink-0 melody-text-white">
                                                    <CheckIcon className="melody-h-6 melody-w-6"/>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </HeadlessRadioGroup.Option>
                        ))}
                    </div>
                </HeadlessRadioGroup>
            </div>
        </div>
    )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
