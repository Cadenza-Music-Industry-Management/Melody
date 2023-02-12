import './RadioButton.css'

export const RadioButton = (props: {
    variant: string,
    size: string,
    label: string,
    value: string
}) => {
    const {
        variant,
        size,
        label,
        value
    } = props

    //TODO advanced layout for hidden radio button with div design https://flowbite.com/docs/forms/radio/#advanced-layout

    return (
        <div className="melody-flex melody-items-center melody-mb-4">
            <input id="radio-button-input"
                   type="radio"
                   value={"radio_value"} //TODO hardcoded
                   checked={"radio_value" === value}
                   name="radio-button"
                   className="melody-w-4 melody-h-4 melody-text-blue-600 melody-bg-gray-100 melody-border-gray-300 focus:melody-ring-blue-500 dark:focus:melody-ring-blue-600 dark:melody-ring-offset-gray-800 focus:melody-ring-2 dark:melody-bg-gray-700 dark:melody-border-gray-600" />
                <label htmlFor="radio-button-input" className="melody-ml-2 melody-text-sm melody-font-medium melody-text-gray-900 dark:melody-text-gray-300">
                    {label}
                </label>
        </div>
    )
}
