import { CSSProperties, ReactNode } from "react";
import {DatePicker} from "./Inputs/DatePicker";
import { IconTooltip } from "@/components/Melody/src/components/Layouts/IconTooltip";

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
    indicator?: IndicatorProps,
    trailerComponent?: ReactNode,
    additionalClasses?: string,
    loading?: boolean
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
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    headerComponent?: ReactNode;
    trailerComponent?: ReactNode;
    max?: number,
    min?: number
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
    message: string,
    direction?: 'top' | 'bottom' | 'left' | 'right',
    delay?: number,
    children?: ReactNode,
    additionalClasses?: string
}

//Icon
export interface IconProps {
    size?: string,
    icon: string,
    additionalStyles?: any,
    additionalClasses?: string,
}

export interface AddIconProps {
    icon: string,
    rightAligned?: boolean,
    additionalStyles?: any,
    additionalClasses?: string,
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
    variant?: string,
    size?: string,
    text: string,
    indicator?: IndicatorProps
}

//Breadcrumb
export interface BreadcrumbProps {
    size?: 'small' | 'medium' | 'large',
    variant?: 'transparent' | 'primary' | 'secondary' | 'light',
    items: BreadcrumbItemProps[]
}

export interface BreadcrumbItemProps {
    link?: string,
    label?: string,
    icon?: AddIconProps
}

//Page Container
export interface PageContainerProps {
    title?: LabelProps,
    subTitle?: LabelProps,
    textAlignClass?: 'melody-text-left' | 'melody-text-center' | 'melody-text-right', //TODO only used when there is no button passed in
    headerBGColor?: string,
    headerTextColor?: string,
    children?: ReactNode,
    button?: ReactNode,
    additionalClasses?: string,
    tooltip?: IconTooltipProps
}

//Form List Layout
export interface FormListLayoutProps {
    label: string,
    subLabel: string,
    footerComponent?: ReactNode,
    items: {
        key: ReactNode,
        value: ReactNode
    }[],
    tooltip?: IconTooltipProps
}

//Radio Button
export interface RadioButtonProps {
    handleChange: (checked: boolean) => void,
    variant?: string,
    size?: string,
    label?: string,
    subLabel?: string,
    disabled?: boolean,
    value: boolean | undefined,
    additionalParentStyles?: CSSProperties
}


//Checkbox
export interface CheckboxProps {
    handleChange: (checked: boolean) => void,
    value: boolean | undefined,
    size?: string,
    variant?: string,
    label?: string,
    subLabel?: string,
    disabled?: boolean,
    additionalParentStyles?: CSSProperties
}

//Icon Tooltip
export interface IconTooltipProps {
    icon?: string,
    fontSize?: number,
    fontColor?: string,
    message: string,
    direction?: 'top' | 'bottom' | 'left' | 'right'
}