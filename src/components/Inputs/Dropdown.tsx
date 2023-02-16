import MultiSelect from "react-select";
import './Dropdown.css'

export const Dropdown = (props: {
    name: string,
    className: string,
    size: string,
    label: string,
    value: boolean,
    isMulti: boolean,
    isClearable: boolean,
    isSearchable: boolean,
    isDisabled: boolean,
    isLoading: boolean,
    options: any[], //TODO need TS object
    onChange: (selectedValue: any) => void //TODO could be one or many objects
}) => {
    const {
        name,
        className,
        size,
        label,
        value,
        isMulti,
        isClearable,
        isSearchable,
        isDisabled,
        isLoading,
        options,
        onChange
    } = props

    const dropdownCustomStyling = {
        control: (base: any, state: any) => ({
            ...base,
            borderRadius: 10,
            "&:hover": {
                borderColor: state.isFocused ? "#0C192C" : "rgba(12, 25, 44, 0.5)",
                boxShadow: "0 0 0 1px #0C192C"
            }
        }),
        option: (styles: any, {isFocused, isSelected}: any) => ({
            ...styles,
            color: isFocused || isSelected ? "white" : "black",
            background: isFocused
                ? 'rgba(12, 25, 44, 0.7)'
                : isSelected
                    ? 'rgba(12, 25, 44, 1)'
                    : undefined,
            zIndex: 1
        }),
    }

    return (
       <div>
           {/*TODO label component?*/}
           <p>
               {label}
           </p>
           <MultiSelect
               name={name}
               styles={dropdownCustomStyling}
               value={value}
               className={className}
               onChange={(tag) => onChange(tag)}
               options={options}
               isMulti={isMulti}
               isClearable={isClearable}
               isSearchable={isSearchable}
               isDisabled={isDisabled}
               isLoading={isLoading}
           />
       </div>
    )
}