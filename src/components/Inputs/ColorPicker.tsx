import "./ColorPicker.css"
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import { TextInput } from "@/components/Melody/src/components/Inputs/TextInput";
import { useCloseOnClickAway } from "@/components/Melody/src/utils/hooks";

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
]

export const ColorPicker = (props: {
    title?: string,
    value: string,
    onChange: (color: string) => void
}) => {

    const {
        title = 'Select Color',
        value,
        onChange
    } = props

    const [isOpen, setIsOpen] = useState(false)
    const [selectedColorState, setSelectedColorState] = useState("#FFFFF")
    const colorPickerContainerRef = useCloseOnClickAway(toggleOpen)

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
        <div className={"melody-relative"} ref={colorPickerContainerRef}>

            <div className={"melody-text-center"}>
                {/*TODO will need to support button variants at some point*/}
                <Button label={title} onClick={toggleOpen} trailerComponent={
                    <div className={"melody-ml-2"}>
                        <div style={{ backgroundColor: selectedColorState }}
                             className={"melody-h-5 melody-w-5 melody-border melody-border-white melody-rounded-md"} />
                    </div>
                } />
            </div>

            <div className={`${
                isOpen ? "melody-block" : "melody-hidden"
            } melody-absolute melody-z-10 melody-mt-2 melody-w-full melody-justify-center melody-rounded-md melody-shadow-lg melody-border-2 melody-border-primary-100 melody-bg-white`}>
                <div className="melody-flex melody-flex-wrap melody-p-1">
                    {COLORS.map((color) => (
                        <div key={color}
                             className={`melody-m-1 melody-cursor-pointer melody-h-8 melody-w-8 melody-rounded ${color === selectedColorState ? 'melody-border-2 melody-border-accent-300' : 'melody-border melody-border-primary-200'}`}
                             style={{ backgroundColor: color }}
                             onClick={() => handleColorClick(color)} />
                    ))}
                </div>

                <div className={"melody-p-2"}>
                    <TextInput label={{ label: 'Enter Custom Hex Value', bold: true }} value={selectedColorState} onChange={onChange} onBlur={handleColorClick} max={10} />
                </div>
            </div>
        </div>
    )
}
