import React, {ReactNode} from 'react';
import "./PageContainer.css"

export const PageContainer = (props: {
    title: string,
    textAlignClass?: 'melody-text-left' | 'melody-text-center' | 'melody-text-right', //TODO only used when there is no button passed in
    headerBGColor?: string,
    headerTextColor?: string,
    children: ReactNode,
    button?: ReactNode
}) => {
    const {
        title,
        textAlignClass = 'melody-text-left',
        headerBGColor = 'melody-bg-white',
        headerTextColor = 'melody-text-black',
        children,
        button
    } = props

    //TODO prop for different bg colors for header? and also different options like dropdown, etc.. so can be used in various places

    return (
        <div className="melody-bg-white melody-shadow melody-rounded-lg">
            {/*TODO border-2 at the moment as -1 doesn't exist?*/}
            <div className={`melody-border-b-2 border-gray-600 melody-p-3 melody-rounded-t-lg ${textAlignClass} ${headerTextColor} ${headerBGColor} ${button ? 'melody-flex melody-flex-col sm:melody-flex-row' : ''} melody-justify-between melody-items-center`}>
                <h2 className={`melody-text-lg melody-font-medium ${button ? 'melody-mb-4 sm:melody-mb-0' : ''}`}>{title}</h2>
                {button && button}
            </div>

            <div className="melody-p-6">
                {children}
            </div>
        </div>
    );
};