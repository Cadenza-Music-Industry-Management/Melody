'use client'

import { useEffect, useRef, useState } from "react";
import "./TextInput.css"
import {TextInputProps} from "../types";
import {Label} from "../Layouts/Label";

export const TextInput = (props: TextInputProps) => {
    const {
        value,
        defaultValue,
        type = 'text',
        label,
        placeholder,
        size = 'medium',
        disabled = false,
        onChange,
        onBlur,
        headerComponent,
        trailerComponent,
        maxLength,
        max,
        min,
        error = false
    } = props

    const [stateValue, setStateValue] = useState<string | number>(value)
    const [cursorPosition, setCursorPosition] = useState<number | null>(null)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (value !== stateValue) setStateValue(value === null ? "" : value)
    }, [value])

    useEffect(() => {
        if (type === 'text') ref.current?.setSelectionRange(cursorPosition, cursorPosition)
    }, [ref, cursorPosition, stateValue])

    return (
        <div className={"melody-w-full"}>
            {label && <Label {...label} />}
            <div className="mt-1 melody-flex melody-rounded-md melody-shadow-sm">

                {headerComponent &&
                    <span className="melody-inline-flex melody-items-center melody-rounded-l-lg melody-border melody-border-r-0 melody-border-gray-300 melody-bg-gray-50 melody-px-3 melody-text-sm melody-text-gray-500">
                        {headerComponent}
                    </span>
                }

                <input ref={ref}
                       type={type}
                       max={max}
                       min={min}
                       maxLength={maxLength}
                       placeholder={placeholder}
                       value={stateValue}
                       defaultValue={defaultValue}
                       disabled={disabled}
                       onChange={(event => {
                           if (onChange) onChange(event.target.value)
                           setCursorPosition(event.target.selectionStart)
                       })}
                       onBlur={(event => {
                           if (onBlur) onBlur(event.target.value)
                       })}
                       className={`melody-text-input ${error ? "error" : ""} ${headerComponent ? (trailerComponent ? 'hasHeaderTrailer' : 'hasHeader') : (trailerComponent ? 'hasTrailer' : '')} ${size}`} />

                {trailerComponent &&
                    <span className="melody-inline-flex melody-items-center melody-rounded-r-lg melody-border melody-border-l-0 melody-border-gray-300 melody-bg-gray-50 melody-px-3 melody-text-sm melody-text-gray-500">
                        {trailerComponent}
                    </span>
                }
            </div>
        </div>
    );
};
