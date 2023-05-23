import "./DatePicker.css"
import {DatePickerProps} from "../types";
import {Label} from "../Layouts/Label";
import React, {forwardRef} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import dayjs from "dayjs";

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
                    return `${showTimeInput ? dayjs(startDate).format("MM-DD-YYYY HH:mm A") : dayjs(startDate).format("MM-DD-YYYY")} - ${showTimeInput ? dayjs(endDate).format("MM-DD-YYYY HH:mm A") : dayjs(endDate).format("MM-DD-YYYY")}`
                } else {
                    return showTimeInput ? dayjs(startDate).format("MM-DD-YYYY HH:mm A") : dayjs(startDate).format("MM-DD-YYYY")
                }
            } else {
                if (value) {
                    return showTimeInput ? dayjs(value).format("MM-DD-YYYY HH:mm A") : dayjs(value).format("MM-DD-YYYY")
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
