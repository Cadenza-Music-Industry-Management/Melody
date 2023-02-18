
//Indicator
export interface IndicatorProps {
    variant: string,
    size: string,
    animated?: boolean
}

//Button
export interface ButtonProps {
    color?: 'gray' | 'gold' | 'navy';
    variant?: 'solid' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    label: string,
    onClick: () => void
}

//Dropdown
export interface DropdownOption {
    label: string;
    value: string | number;
}

export interface DropdownProps {
    name: string;
    label: string;
    options: DropdownOption[];
    onChange: (value: DropdownOption | DropdownOption[]) => void;
    value?: DropdownOption | DropdownOption[];
    placeholder?: string;
    isDisabled?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    isSearchable?: boolean;
    isLoading?: boolean;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'tertiary';
}

//Text Input/Area
export interface TextInputProps {
    value: string,
    type?: 'text' | 'number'; //TODO other types
    label?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange: (value: string) => void;
}

//Label
export interface LabelProps {
    size?: 'small' | 'medium' | 'large';
    label: string,
    htmlFor?: string
}