import "./DatePicker.css"
import {DatePickerProps} from "../types";
import {Label} from "../Layouts/Label";
import React, {forwardRef} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/Melody/src/components/Inputs/Button";

export const DatePicker = (props: DatePickerProps) => {
    const {
        label,
        value,
        onChange,
        className,
        withPortal = false,
        selectRange = false,
        showTimeInput = false,
        startDate, //TODO default?
        endDate, //TODO default?
        dateFormat,
        disabled = false
    } = props

    const ButtonInput = forwardRef<any>(({ onClick }: any, ref) => {

        const getButtonText = () => {
            if (startDate) {
                if (endDate) {
                    return `${startDate.toDateString()} - ${endDate.toDateString()}`
                } else {
                    return startDate?.toDateString()
                }
            } else {
                if (value) {
                    return value?.toDateString()
                } else {
                    return `Select Date`
                }
            }
        }

        return (
            <Button label={getButtonText()}
                    additionalClasses={"melody-w-full"}
                    color={"white"}
                    onClick={onClick}
                    ref={ref} />
        )
    })
    ButtonInput.displayName = 'ButtonInput'

    return (
        <div>
            {label && <Label {...{...label, htmlFor: 'datePicker'}} />}
            <ReactDatePicker id={'datePicker'}
                             selected={value}
                             className={className}
                             disabled={disabled}
                             customInput={<ButtonInput />}
                             onChange={(dates: any) => {
                                 console.log(dates)
                                 if (onChange) onChange(dates)
                             }}
                             withPortal={withPortal}
                             selectsRange={selectRange}
                             startDate={startDate}
                             dateFormat={dateFormat}
                             showTimeInput={showTimeInput}
                             endDate={endDate} />
        </div>
    )
}
