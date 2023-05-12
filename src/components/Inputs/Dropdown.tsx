import Select from 'react-select';
import './Dropdown.css'
import {DropdownProps} from "../types";
import {Label} from "../Layouts/Label";

export const Dropdown = (props: DropdownProps) => {
    const {
        size = 'regular',
        color = 'primary',
        label,
        value,
        isMulti = true,
        isClearable = true,
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
            borderColor: state.isFocused ? '#B8B9C4' : provided.borderColor,
            boxShadow: state.isFocused ? '0 0 0 2px rgba(51, 153, 255, 0.2)' : provided.boxShadow,
            '&:hover': {
                borderColor: '#B8B9C4',
            },
        }),
        option: (provided: any, state: { isFocused: any; }) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#F7FAFC' : provided.backgroundColor,
            color: state.isFocused ? '#333333' : provided.color,
            '&:hover': {
                backgroundColor: '#F7FAFC',
            },
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

    const sizeClasses = {
        small: 'melody-h-8 melody-text-sm',
        regular: 'melody-h-10 melody-text-base',
        medium: 'melody-h-12 melody-text-base',
        large: 'melody-h-14 melody-text-lg',
    };

    return (
       <div>
           {label && <Label htmlFor={'Dropdown'} label={label} />}
           <Select id={'Dropdown'}
                   name={'Dropdown'}
                   // className={`melody-dropdown ${sizeClasses[size]} ${colorClasses[color]} ${isDisabled && 'melody-opacity-50 melody-cursor-not-allowed'}`}
                   // classNamePrefix="melody-dropdown"
                   styles={customStyles}
                   value={value}
                   onChange={(tag) => onChange((tag as any))} //TODO needs casting
                   options={options}
                   isMulti={isMulti}
                   isClearable={isClearable}
                   isSearchable={isSearchable}
                   isDisabled={isDisabled}
                   isLoading={isLoading}/>
       </div>
    )
}