import "./DatePicker.css"
import {DatePickerProps} from "../types";
import {Label} from "../Layouts/Label";
import React, {forwardRef} from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker = (props: DatePickerProps) => {
    const {
        label,
        selected,
        onChange,
        className,
        withPortal = true,
        selectRange = false,
        showTimeInput = false,
        startDate, //TODO default?
        endDate, //TODO default?
        dateFormat
    } = props

    const ButtonInput = forwardRef<any>(({ value, onClick }: any, ref) => {

        const getButtonText = () => {
            if (startDate) {
                if (endDate) {
                    return `${startDate.toDateString()} - ${endDate.toDateString()}`
                } else {
                    return startDate?.toDateString()
                }
            } else {
                return `Select Date`
            }
        }

        //For full width:  melody-w-full
        return (
            <button
                onClick={onClick}
                ref={ref}
                type="button"
                className='melody-datepicker-button'>
                {getButtonText()}
            </button>
        )
    })
    ButtonInput.displayName = 'ButtonInput'

    return (
        <div>
            {label && <Label {...{...label, htmlFor: 'datePicker'}} />}
            <ReactDatePicker id={'datePicker'}
                             selected={selected}
                             className={className}
                             customInput={<ButtonInput />}
                             onChange={(dates: any) => onChange && onChange(dates)}
                             withPortal={withPortal}
                             selectsRange={selectRange}
                             startDate={startDate}
                             dateFormat={dateFormat}
                             showTimeInput={showTimeInput}
                             endDate={endDate} />
        </div>
    )
}
