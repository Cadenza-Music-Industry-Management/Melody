import { CSSProperties, ForwardedRef, ReactNode } from "react";
import { Group } from "@/constants/types";

//Indicator
export interface IndicatorProps {
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light',
    size?: 'small' | 'medium' | 'large',
    animated?: boolean
}

//Button
export interface ButtonProps {
    type?: 'button' | 'submit',
    color?: 'gray' | 'white' | 'secondary' | 'primary' | 'warning',
    variant?: 'solid' | 'outlined';
    size?: 'xsmall' | 'small' | 'medium' | 'large',
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
    onChange: (color: string) => void,
    textAlignClass?: string,
    disabled?: boolean
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
    error?: boolean,
    max?: number, //For text input only
    min?: number, //For text input only
    resize?: boolean //For text area only
    rows?: number //For text area only
}

//Label
export interface LabelProps {
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge',
    label: string | number,
    htmlFor?: string,
    required?: boolean,
    bold?: boolean,
    mediumBold?: boolean,
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
    showSubTitle?: boolean,
    fullWidth?: boolean,
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light'
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
    disabled?: boolean,
    buttonSize?: 'xsmall' | 'small' | 'medium' | 'large';
}

//Modal
export interface ModalProps {
    title: string,
    open: boolean,
    setOpen?: (open: boolean) => void,
    children?: ReactNode,
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge',
    customZIndexClass?: string
}

//Navigation Bar
export interface NavigationBarProps {
    user?: any, //TODO need to use User props from other types file
    navigation: NavBarItemProps[],
    userNavigation: NavBarItemProps[],
    homepage?: boolean,
    fixed?: boolean,
    icon?: any
}
export interface NavBarItemProps {
    name: string,
    value?: string,
    onClick?: () => void,
    href?: string,
    trailerComponent?: ReactNode,
    icon?: string,
    disabled?: boolean,
    disabledErrorMessage?: string
}

//Footer
export interface FooterProps {
    companyName?: string,
    mainContentNavigation?: {
        title: string,
        items: FooterLinkItem[]
    }[],
    socialMedia?: FooterLinkItem[],
    legalLinks?: FooterLinkItem[]
}

export interface FooterLinkItem {
    href: string,
    title: string,
    icon?: string
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

//Pricing
export interface PricingComponentProps {
    tierDetails: TierDetails[],
    tierSelection?: string | null,
    onTierSelection?: (tierSelected: string) => void
}

export interface TierDetails {
    title: string,
    logo?: any,
    price?: string,
    yearlyPrice?: string,
    showPricingButtons: boolean,
    items?: TierDetailsLineItem[]
}

export interface TierDetailsLineItem {
    text: string,
    subText?: string
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
    variant?: 'info' | 'alert' | 'success' | 'caution' | 'dark' | 'light' | 'maroon',
    size?: 'xsmall' | 'small' | 'medium' | 'large',
    text?: string,
    indicator?: IndicatorProps,
    icon?: IconProps | null,
    fullWidth?: boolean,
    fullHeight?: boolean,
    textAlignClass?: "melody-text-left" | "melody-text-center" | "melody-text-right"
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
        value: ReactNode,
        visible?: boolean
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

//Sidebar
export interface SidebarProps {
    logo?: any,
    collapsedLogo?: any,
    links: SidebarLinkProps[],
    organization: Group | null,
    logoAltText?: string
}

export interface SidebarLinkProps {
    type: string,
    title?: string,
    trailerComponent?: ReactNode,
    href?: string,
    onClick?: () => void, //open slideover for example
    icon?: AddIconProps,
    selected?: boolean,
    children?: SidebarLinkProps[],
    disabled?: {
        value: boolean,
        message?: string //Default is: 'You don't have the needed permission'
    }
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
    [key: string]: any,
    accessorKey: string,
    customTextFields?: string[],
    linkOnClickSettings?: MelodyTableColumnLinkOnClickSettings,
    formatType?: "text_input" | "date" | "datetime" | "text" | "image" | "social_media" | "dropdown" | "button" | "selection_checkbox" | "checkbox" | "artist_list" | "badge" | "content_id" | "custom_text" | "url" | "currency" | "object_text",
    innerObject?: string,
    innerObjectAccessor?: string,
    header: MelodyTableHeader<TData>,
    dropdownOptions?: MelodyTableColumnDropdownOptions[],
    disabled?: boolean,
    disabledSettings?: MelodyTableColumnDisabledSettings[],
    function?: MelodyTableColumnFunction<TData>,
    visibilityFunction?: (object: TData) => boolean,
    size?: number,
    minSize?: number,
    maxSize?: number,
    hideOnSmallWidth?: boolean,
    hideOnPhoneWidth?: boolean
}

export interface MelodyTableHeader<TData> {
    formatType?: "text" | "image" | "checkbox",
    title?: string,
    image?: string,
    additionalCSS?: CSSProperties,
    tooltipMessage?: string,
    sorting?: boolean
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
    visibilityCondition?: TABLE_VISIBILITY_CONDITIONS[],
    disabledSettings?: MelodyTableColumnDisabledSettings[]
}

export enum TABLE_VISIBILITY_CONDITIONS {
    CURRENT_USER_MATCHES_ENTRY,
    LENGTH_CHECK
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
    processingRequest: boolean,
    onRefreshClicked?: () => void
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
    type: "text" | "releases" | "artists" | "apparel_items" | "blog_posts" | "accounting_sources" | "date" | "date_range" | "submit" | "refresh" | "submit_refresh" | "dropdown",
    validation?: 'text' | 'number' | 'password' | 'email';
    colSize: string,
    title?: string,
    primaryColor?: string,
    secondaryColor?: string,
    textColor?: string,
    publicSiteSelection?: boolean,
    dropdownOptions?: DropdownOption[]
}