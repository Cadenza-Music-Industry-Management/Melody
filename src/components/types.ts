import { CSSProperties, ForwardedRef, ReactNode } from "react";

//Indicator
export interface IndicatorProps {
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
    animated?: boolean
}

//Button
export interface ButtonProps {
    type?: 'button' | 'submit',
    color?: 'gray' | 'white' | 'secondary' | 'primary';
    variant?: 'solid' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    label?: string,
    customLabel?: LabelProps, //TODO combine label and customLabel? (will need to refactor all current buttons)
    icon?: AddIconProps,
    onClick?: () => void,
    disabled?: boolean,
    indicator?: IndicatorProps,
    trailerComponent?: ReactNode,
    additionalClasses?: string,
    loading?: boolean,
    ref?: ForwardedRef<any>
}

//Dropdown
export interface DropdownOption {
    label: string;
    value: string | number;
}

export interface DropdownProps {
    label?: LabelProps;
    options: DropdownOption[];
    onChange?: (value: DropdownOption | DropdownOption[]) => void;
    defaultValue?: DropdownOption,
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

//Rich Text Editor
export interface RichTextEditorProps {
    label?: LabelProps,
    value?: string,
    placeholder?: string,
    readOnly?: boolean,
    disabled?: boolean,
    toolbar?: boolean,
    className?: string,
    onBlur?: (value: string) => void,
    characterLimit?: number
}

//Color Picker
export interface ColorPickerProps {
    title?: LabelProps,
    buttonColor?: 'gray' | 'white' | 'secondary' | 'primary',
    value: string,
    onChange: (color: string) => void
}

//Text Input/Area
export interface TextInputProps {
    value?: any,
    defaultValue?: any,
    type?: 'text' | 'number' | 'password' | 'email';
    label?: LabelProps;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    headerComponent?: ReactNode;
    trailerComponent?: ReactNode;
    maxLength?: number,
    max?: number,
    min?: number
}

//Label
export interface LabelProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    label: string,
    htmlFor?: string,
    required?: boolean,
    bold?: boolean,
    additionalStyles?: any,
    additionalClasses?: string,
    color?: string
}

//Tooltip
export interface TooltipProps {
    message: string,
    direction?: 'top' | 'bottom' | 'left' | 'right',
    delay?: number,
    children?: ReactNode,
    additionalClasses?: string,
    widthClass?: string
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
    value?: Date,
    onChange?: (dates?: Date | Date[]) => void,
    className?: string,
    withPortal?: boolean,
    selectRange?: boolean,
    showTimeInput?: boolean,
    startDate?: Date,
    endDate?: Date,
    dateFormat?: string,
    disabled?: boolean
}

//Modal
export interface ModalProps {
    title: string,
    open: boolean,
    setOpen?: (open: boolean) => void,
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
    trailerComponent?: ReactNode,
    icon?: string,
    disabled?: boolean
}

//Button Menu
export interface ButtonMenuProps {
    size?: 'small' | 'medium' | 'large',
    buttonContents?: ReactNode,
    dropdownHeaderItem?: ReactNode,
    additionalClasses?: string,
    label?: string,
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

//Checkbox & Radio Button
export interface CheckboxRadioButtonProps {
    onChange?: (checked: boolean) => void,
    variant?: string,
    size?: string,
    label?: LabelProps,
    subLabel?: string,
    disabled?: boolean,
    value?: boolean,
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

//Melody Table
export interface TableProps<TData> {
    tableName: string, //Used to display when loading data
    // data: TData[] | null | undefined,
    rowsCanExpand?: boolean,
    columnsToDisplay: MelodyTableColumn<TData>[],
    showRowCount?: boolean,
    showPagination?: boolean,
    columnResizing?: boolean,
    fetchData: (options: MelodyTableFetchDataOptions) => Promise<{ rows: TData[], pageCount: number }>,
    defaultPageSize?: number,
    filterItems?: MelodySearchParamListEntry[]
}

export interface MelodyTableFetchDataOptions {
    pageIndex: number,
    pageSize: number,
    filters: MelodySearchParams
}

export interface MelodyTableColumn<TData> {
    accessorKey: string,
    formatType?: "date" | "datetime" | "text" | "image" | "social_media" | "dropdown" | "checkbox",
    header: MelodyTableHeader<TData>,
    dropdownOptions?: MelodyTableColumnDropdownOptions[],
    disabled?: boolean,
    disabledSettings?: MelodyTableColumnDisabledSettings[],
    function?: MelodyTableColumnFunction<TData>,
    size?: number,
    minSize?: number,
    maxSize?: number
}

export interface MelodyTableHeader<TData> {
    formatType?: "text" | "image",
    title?: string,
    image?: string,
    additionalCSS?: CSSProperties,
    tooltipMessage?: string
}

export interface MelodyTableColumnFunction<TData> {
    linkedFunctions?: any[],
    linkedFunctionIdParam?: boolean,
}

export interface MelodyTableColumnDropdownOptions {
    title: string,
    dropdownFunction: any,
    dropdownParams: MelodyTableColumnDropdownParamSettings[],
    icon?: string,
    disabled?: boolean,
    disabledSettings?: MelodyTableColumnDisabledSettings[]
}

export interface MelodyTableColumnDropdownParamSettings {
    propertyValue: boolean,
    stringValue: string
}

export interface MelodyTableColumnDisabledSettings {
    disabledField: string,
    userPermission?: boolean,
    nullCheck?: boolean,
    disabledMessage: string
}

//Search

export interface MelodySearchProps {
    onSearch: () => void,
    items: MelodySearchParamListEntry[],
    processingRequest: boolean
}

export interface MelodySearchParams {
    title?: string | null,
    artists?: string[] | null,
    genres?: string[] | null,
    releases?: string[] | null,
    tags?: string[] | null,
    apparel?: string[] | null,
    sources?: string[] | null,
    startDate?: any | null,
    endDate?: any | null,
    email?: string | null,
    username?: string | null,
    writer?: string | null,
    contentId?: string | null,
    contentIdType?: any | null,
    actions?: string[] | null,
    fileType?: string[] | null,
    emailType?: string | null,
    emailFilter?: string | null,
    activeStatus?: string | null
}

export interface MelodySearchParamListEntry {
    filterProperty?: string, //What property from the search modal should we use
    type: "text" | "releases" | "date" | "submit" | "refresh",
    validation?: 'text' | 'number' | 'password' | 'email';
    colSize: string,
    title?: string,
    primaryColor?: string,
    secondaryColor?: string,
    textColor?: string,
    publicSiteSelection?: boolean
}