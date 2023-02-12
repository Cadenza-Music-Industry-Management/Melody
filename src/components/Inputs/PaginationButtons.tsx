import './PaginationButtons.css'

export const PaginationButtons = (props: {
    variant: string,
    size: string
}) => {
    const {
        variant,
        size
    } = props

    return (
        <nav aria-label="Page navigation">
            <ul className="melody-inline-flex -melody-space-x-px">
                <li>
                    <a href="#"
                       className="melody-px-3 melody-py-2 melody-ml-0 melody-leading-tight melody-text-gray-500 melody-bg-white melody-border melody-border-gray-300 melody-rounded-l-lg hover:melody-bg-gray-100 hover:melody-text-gray-700 dark:melody-bg-gray-800 dark:melody-border-gray-700 dark:melody-text-gray-400 dark:hover:melody-bg-gray-700 dark:hover:melody-text-white">
                        Previous
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="melody-px-3 melody-py-2 melody-leading-tight melody-text-gray-500 melody-bg-white melody-border melody-border-gray-300 hover:melody-bg-gray-100 hover:melody-melody-text-gray-700 dark:melody-bg-gray-800 dark:melody-border-gray-700 dark:melody-text-gray-400 dark:hover:melody-bg-gray-700 dark:hover:melody-text-white">
                        1
                    </a>
                </li>
                <li>
                    <a href="#"
                       aria-current="page"
                       className="melody-px-3 melody-py-2 melody-leading-tight melody-text-gray-500 melody-bg-white melody-border melody-border-gray-300 hover:melody-bg-gray-100 hover:melody-text-gray-700 dark:melody-g-gray-800 dark:melody-border-gray-700 dark:melody-text-gray-400 dark:hover:melody-bg-gray-700 dark:hover:melody-text-white">
                        2
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="melody-px-3 melody-py-2 melody-leading-tight melody-text-gray-500 melody-bg-white melody-border melody-border-gray-300 melody-rounded-r-lg hover:melody-bg-gray-100 hover:text-gray-700 dark:melody-bg-gray-800 dark:melody-border-gray-700 dark:melody-text-gray-400 dark:hover:melody-bg-gray-700 dark:hover:melody-text-white">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
