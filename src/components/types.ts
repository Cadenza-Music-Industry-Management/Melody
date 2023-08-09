import { ChangeEvent, CSSProperties, ForwardedRef, ReactNode } from "react";

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
    additionalStyles?: any,
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
    passValueToOnChange?: boolean
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
    label: string | number,
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
    widthClass?: string,
    disabled?: boolean
}

//Icon
export interface IconProps {
    icon: string,
    additionalStyles?: any,
    additionalClasses?: string,
    onClick?: () => void,
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
    title?: string,
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
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
}

//Navigation Bar
export interface NavigationBarProps {
    user?: any, //TODO need to use User props from other types file
    navigation: NavBarItemProps[],
    userNavigation: NavBarItemProps[],
    transparentBG?: boolean
}
export interface NavBarItemProps {
    name: string,
    value?: string,
    onClick?: () => void,
    href?: string,
    trailerComponent?: ReactNode,
    icon?: string,
    disabled?: boolean
}

//Button Menu
export interface ButtonMenuProps {
    size?: 'small' | 'medium' | 'large',
    color?: 'gray' | 'white' | 'secondary' | 'primary',
    variant?: 'solid' | 'outlined',
    buttonContents?: ReactNode,
    dropdownHeaderItem?: ReactNode,
    additionalClasses?: string,
    label?: string,
    icon?: AddIconProps,
    disabled?: boolean,
    activeItemLabel?: string,
    menuDirection?: "left" | "right",
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
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light',
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
    variant?: 'primary' | 'secondary',
    size?: 'small' | 'medium' | 'large';
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
    showPaginationDropdown?: boolean,
    columnResizing?: boolean,
    fetchData: (options: MelodyTableFetchDataOptions) => Promise<{ rows: TData[], pageCount: number }>,
    defaultPageSize?: number,
    filterItems?: MelodySearchParamListEntry[],
    dropdown?: MelodyTableDropdown,
    queryId: string
}

export interface MelodyTableFetchDataOptions {
    pageIndex: number,
    pageSize: number,
    pageCount?: number,
    filters: MelodySearchParams
}

export interface MelodyTableColumn<TData> {
    accessorKey: string,
    customTextFields?: string[],
    linkOnClickSettings?: MelodyTableColumnLinkOnClickSettings,
    formatType?: "date" | "datetime" | "text" | "image" | "social_media" | "dropdown" | "button" | "selection_checkbox" | "checkbox" | "artist_list" | "badge" | "content_id" | "custom_text" | "url" | "currency" | "object_text",
    innerObject?: string,
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
    formatType?: "text" | "image" | "checkbox",
    title?: string,
    image?: string,
    additionalCSS?: CSSProperties,
    tooltipMessage?: string
}

export interface MelodyTableColumnLinkOnClickSettings {
    linkURL?: string,
    linkProperty?: string,
    onClick?: any,
    onClickParams?: MelodyTableColumnFunctionParamSettings[],
}

export interface MelodyTableColumnFunction<TData> {
    linkedFunctions?: any[],
    linkedFunctionIdParam?: boolean,
}

export interface MelodyTableColumnDropdownOptions {
    title: string,
    internalDropdownFunctionCall?: "clear_list",
    dropdownFunction?: any,
    dropdownParams?: MelodyTableColumnFunctionParamSettings[],
    icon?: string,
    disabled?: boolean,
    visibleCondition?: "length_check", //TODO string instead of boolean since we don't have access to data, so can't do like length check but can pass in "length_check" for MelodyTable to do it for us
    disabledSettings?: MelodyTableColumnDisabledSettings[]
}

export interface MelodyTableColumnFunctionParamSettings {
    propertyValue: boolean,
    stringValue?: string,
    booleanValue?: boolean
}

export interface MelodyTableColumnDisabledSettings {
    disabledField: string,
    userPermission?: boolean,
    nullCheck?: boolean,
    disabledMessage: string
}

export interface MelodyTableDropdown {
    title: string,
    options?: MelodyTableColumnDropdownOptions[],
}

//--Search Interfaces--

export interface MelodySearchProps {
    items: MelodySearchParamListEntry[],
    processingRequest: boolean
}

export interface MelodySearchParams {
    title?: string | null,
    artists?: string[] | null,
    genres?: DropdownOption[] | null,
    releases?: string[] | null,
    tags?: DropdownOption[] | null,
    apparel?: string[] | null,
    sources?: DropdownOption[] | null,
    startDate?: any | null,
    endDate?: any | null,
    email?: string | null,
    username?: string | null,
    writer?: string | null,
    contentId?: string | null,
    contentIdType?: any | null,
    actions?: DropdownOption[] | null, //TODO need to change dropdown options to label, value object as we pass entire object
    fileType?: DropdownOption[] | null,
    emailType?: string | null,
    emailFilter?: string | null,
    activeStatus?: string | null
}

export interface MelodySearchParamListEntry {
    filterProperty?: string, //What property from the search modal should we use
    type: "text" | "releases" | "artists" | "apparel_items" | "blog_posts" | "date" | "date_range" | "submit" | "refresh" | "submit_refresh" | "dropdown",
    validation?: 'text' | 'number' | 'password' | 'email';
    colSize: string,
    title?: string,
    primaryColor?: string,
    secondaryColor?: string,
    textColor?: string,
    publicSiteSelection?: boolean,
    dropdownOptions?: DropdownOption[]
}