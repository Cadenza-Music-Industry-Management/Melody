'use client'

import "./DatePicker.css"
import {DatePickerProps} from "../types";
import {Label} from "../Layouts/Label";
import {forwardRef} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "./Button";
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
        disabled = false,
        buttonSize = "large"
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
                    disabled={disabled}
                    size={buttonSize}
                    onClick={onClick}
                    ref={ref} />
        )
    })
    ButtonInput.displayName = 'ButtonInput'

    //TODO nextjs vercel build error randomly? Type error: 'ReactDatePicker' cannot be used as a JSX component.
    const DatePickerComponent = ReactDatePicker as any

    return (
        <div className={"melody-w-full"}>
            {label && <Label {...{...label, htmlFor: 'datePicker'}} />}
            <DatePickerComponent id={'datePicker'}
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
                                 endDate={endDate}
                                 dateFormat={dateFormat}
                                 showTimeInput={showTimeInput} />
        </div>
    )
}
