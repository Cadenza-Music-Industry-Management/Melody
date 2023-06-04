import Select from 'react-select';
import './Dropdown.css'
import {DropdownProps} from "../types";
import {Label} from "../Layouts/Label";

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
        onChange
    } = props

    const customStyles = {
        control: (provided: any, state: { isFocused: any; }) => ({
            ...provided,
            borderRadius: '0.5rem',
            minHeight: size === 'small' ? '1.5rem' : size === 'large' ? '2.5rem' : '2rem',
            fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.125rem' : '0.875rem',
            borderColor: state.isFocused ? '#B8B9C4' : provided.borderColor,
            boxShadow: state.isFocused ? '0 0 0 2px rgba(51, 153, 255, 0.2)' : provided.boxShadow,
            '&:hover': {
                borderColor: '#B8B9C4',
            },
        }),
        menu: (styles: any) => ({
            ...styles,
            fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.125rem' : '0.875rem',
            borderRadius: size === 'small' ? '0.125rem' : size === 'large' ? '0.375rem' : '0.25rem',
        }),
        option: (provided: any, state: { isFocused: any; }) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#F7FAFC' : provided.backgroundColor,
            color: state.isFocused ? '#333333' : provided.color,
            '&:hover': {
                backgroundColor: '#F7FAFC',
            },
        }),
        dropdownIndicator: (styles: any) => ({
            ...styles,
            padding: size === 'small' ? 2 : size === 'large' ? 8 : 4,
        }),
        multiValue: (provided: any) => ({
            ...provided,
            backgroundColor: '#E2E8F0',
        }),
        multiValueLabel: (provided: any) => ({
            ...provided,
            color: '#4A5568',
        }),
        multiValueRemove: (provided: any) => ({
            ...provided,
            ':hover': {
                backgroundColor: '#CBD5E0',
                color: '#4A5568',
            },
        })
    };

    return (
       <div className={"melody-w-full"}>
           {label && <Label {...label} />}
           <Select id={'Dropdown'}
                   name={'Dropdown'}
                   // menuPlacement="auto"
                   // menuPosition="fixed"
                   // className={`melody-dropdown ${sizeClasses[size]} ${colorClasses[color]} ${isDisabled && 'melody-opacity-50 melody-cursor-not-allowed'}`}
                   // classNamePrefix="melody-dropdown"
                   styles={customStyles}
                   value={value}
                   defaultValue={defaultValue}
                   onChange={(tag) => { if (onChange) onChange((tag as any)) }} //TODO needs casting
                   options={options}
                   isMulti={isMulti}
                   isClearable={isClearable}
                   isSearchable={isSearchable}
                   isDisabled={isDisabled}
                   isLoading={isLoading}/>
       </div>
    )
}