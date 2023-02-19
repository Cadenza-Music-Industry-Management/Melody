import {ReactNode} from "react";

//Indicator
export interface IndicatorProps {
    variant: string,
    size: string,
    animated?: boolean
}

//Button
export interface ButtonProps {
    color?: 'gray' | 'secondary' | 'primary';
    variant?: 'solid' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    label: string,
    icon?: AddIconProps,
    onClick?: () => void
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
    label?: LabelProps;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange: (value: string) => void;
    icon?: AddIconProps;
}

//Label
export interface LabelProps {
    size?: 'small' | 'medium' | 'large';
    label: string,
    htmlFor?: string,
    required?: boolean,
    bold?: boolean
}

//Tooltip
export interface TooltipProps {
    message: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    children: ReactNode;
}

//Icon
export interface IconProps {
    size?: string,
    icon: string,
    additionalStyles?: any,
    additionalClasses?: string
}

export interface AddIconProps {
    icon: string,
    rightAligned: boolean,
    additionalStyles?: any
}