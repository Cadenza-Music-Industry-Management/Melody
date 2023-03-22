import {ReactNode} from "react";
import {DatePicker} from "./Inputs/DatePicker";

//Indicator
export interface IndicatorProps {
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
    animated?: boolean
}

//Button
export interface ButtonProps {
    type?: 'button' | 'submit',
    color?: 'gray' | 'secondary' | 'primary';
    variant?: 'solid' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    label?: string,
    icon?: AddIconProps,
    onClick?: () => void,
    disabled?: boolean,
    indicator?: IndicatorProps
}

//Dropdown
export interface DropdownOption {
    label: string;
    value: string | number;
}

export interface DropdownProps {
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
    value: any,
    type?: 'text' | 'number' | 'password' | 'email';
    label?: LabelProps;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange: (value: string) => void;
    headerComponent?: ReactNode;
    trailerComponent?: ReactNode;
}

//Label
export interface LabelProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    label: string,
    htmlFor?: string,
    required?: boolean,
    bold?: boolean,
    additionalStyles?: any,
    additionalClasses?: string
}

//Tooltip
export interface TooltipProps {
    message: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    children?: ReactNode;
    iconTooltip?: boolean,
    additionalClasses?: string
}

//Icon
export interface IconProps {
    size?: string,
    icon: string,
    additionalStyles?: any,
    additionalClasses?: string,
    //Contents needed for sidebar icons
    containerType?: string //TODO not working with 'flex' | 'contents'?
}

export interface AddIconProps {
    icon: string,
    rightAligned?: boolean,
    additionalStyles?: any,
    additionalClasses?: string,
    containerType?: string //TODO not working with 'flex' | 'contents'?
}

//Progress Bar
export interface ProgressBarProps {
    size?: 'small' | 'medium' | 'large',
    progress: number,
    title: string,
    label: string,
    subTitle?: string,
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light';
}

//Date Picker
export interface DatePickerProps {
    label?: LabelProps,
    selected?: Date,
    onChange?: (dates?: Date | Date[]) => void,
    className?: string,
    withPortal?: boolean,
    selectRange?: boolean,
    showTimeInput?: boolean,
    startDate?: Date,
    endDate?: Date,
    dateFormat?: string
}

//Modal
export interface ModalProps {
    title: string,
    open: boolean,
    setOpen: (open: boolean) => void,
    children?: ReactNode,
    size?: 'xsmall' | 'small' | 'medium' | 'large'
}

//Navigation Bar
export interface NavigationBarProps {
    user?: any, //TODO need to use User props from other types file
    navigation: NavBarItemProps[],
    userNavigation: NavBarItemProps[]
}
export interface NavBarItemProps {
    name: string,
    onClick?: () => void,
    href?: string,
    trailerComponent?: ReactNode
}

//Button Menu
export interface ButtonMenuProps {
    size?: 'small' | 'medium' | 'large',
    buttonContents: ReactNode,
    dropdownHeaderItem?: ReactNode,
    items: NavBarItemProps[] //TODO Own type or rename?
}

//User
export interface UserProps {
    username: string,
    name: string,
    uid: string,
    icon: string
}

//Badge
export interface BadgeProps {
    variant: string,
    size?: string,
    text: string,
    indicator?: IndicatorProps
}