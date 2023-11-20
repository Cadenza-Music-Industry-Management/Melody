'use client'

import Select, { MultiValue, OnChangeValue, SingleValue } from "react-select";
import './Dropdown.css'
import {DropdownProps} from "../types";
import {Label} from "../Layouts/Label";
import { GetCustomDropdownStyle } from "../../utils/constants";

export const Dropdown = (props: DropdownProps) => {
    const {
        size = 'medium',
        color = 'primary',
        label,
        placeholder,
        defaultValue,
        value,
        isMulti = false,
        isClearable = false,
        isSearchable = true,
        isDisabled = false,
        isLoading = false,
        options,
        onChange,
        passValueToOnChange = false
    } = props

    function getCorrectValue(selection: OnChangeValue<any, boolean>) {
        if (onChange) {
            if (isMulti) {
                onChange(passValueToOnChange ? (selection as MultiValue<any>).map(item => item.value) : selection)
            } else {
                onChange(passValueToOnChange ? (selection as SingleValue<any>).value : selection)
            }
        }
    }

    return (
       <div className={"melody-w-full"}>
           {label && <Label {...label} />}
           <Select id={'Dropdown'}
                   name={'Dropdown'}
                   // menuPlacement="auto"
                   // menuPosition="fixed"
                   // className={`melody-dropdown ${sizeClasses[size]} ${colorClasses[color]} ${isDisabled && 'melody-opacity-50 melody-cursor-not-allowed'}`}
                   // classNamePrefix="melody-dropdown"
                   styles={GetCustomDropdownStyle(size)}
                   value={value}
                   defaultValue={defaultValue}
                   onChange={getCorrectValue}
                   options={options}
                   isMulti={isMulti}
                   isClearable={isClearable}
                   isSearchable={isSearchable}
                   isDisabled={isDisabled}
                   isLoading={isLoading}/>
       </div>
    )
}