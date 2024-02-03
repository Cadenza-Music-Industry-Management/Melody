'use client'

import "./ColorPicker.css"
import { useMemo, useRef, useState } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { ColorPickerProps } from "../../components/types";
import { useClickOutside } from "../../utils/hooks";

//TODO come up with better color selection
const COLORS = [
    "#F87171",
    "#FBBF24",
    "#FCD34D",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#60A5FA",
    "#3B82F6",
    "#D1D5DB",
    "#FFFFFF",
    "#F4F1F1",
    "#9CA3AF",
    "#000000",
]

export const ColorPicker = (props: ColorPickerProps) => {

    const {
        buttonColor = 'primary',
        title,
        value = "#FFFFF",
        onChange,
        textAlignClass = "melody-text-center",
        disabled = false,
        fullWidth = false
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const [selectedColorState, setSelectedColorState] = useState("#FFFFF")
    const colorPickerContainerRef = useRef<any>(null)
    useClickOutside(colorPickerContainerRef, () => setIsOpen(false))

    useMemo(() => {
        setSelectedColorState(value)
    }, [value])

    function toggleOpen() {
        setIsOpen((prevState) => !prevState)
    }

    function handleColorClick(color: string) {
        setSelectedColorState(color)
        onChange(color)
    }

    //TODO move css to class

    return (
        <div className={`melody-relative ${fullWidth ? "melody-w-full" : ""}`} ref={colorPickerContainerRef}>

            <div className={`${textAlignClass ?? "melody-text-center"} ${fullWidth ? "melody-w-full" : ""} melody-h-full`}>
                {/*TODO custom size for button from prop*/}
                <Button customLabel={title}
                        size={"small"}
                        disabled={disabled}
                        onClick={toggleOpen}
                        additionalClasses={`melody-h-full ${fullWidth ? "melody-w-full" : ""}`}
                        color={buttonColor}
                        trailerComponent={
                    <div className={title ? "melody-ml-2" : ""}>
                        <div style={{ backgroundColor: selectedColorState }}
                             className={"melody-h-6 melody-w-6 melody-border melody-border-gray-300 melody-rounded-md"} />
                    </div>
                } />
            </div>

            <div className={`${
                isOpen ? "melody-block" : "melody-hidden"
            } melody-absolute melody-z-10 melody-mt-2 melody-w-[300px] melody-justify-center melody-rounded-md melody-shadow-main melody-border-2 melody-border-primary-100 melody-bg-white`}>
                <div className="melody-flex melody-flex-wrap melody-p-1">
                    {COLORS.map((color) => (
                        <div key={color}
                             className={`melody-m-1 melody-cursor-pointer melody-h-8 melody-w-8 melody-rounded ${color === selectedColorState ? 'melody-border-2 melody-border-accent-300' : 'melody-border melody-border-primary-200'}`}
                             style={{ backgroundColor: color }}
                             onClick={() => handleColorClick(color)} />
                    ))}
                </div>

                <div className={"melody-p-2"}>
                    <TextInput label={{ label: 'Enter Custom Hex Value', bold: true }} value={selectedColorState} onChange={onChange} onBlur={handleColorClick} maxLength={10} />
                </div>
            </div>
        </div>
    )
}
