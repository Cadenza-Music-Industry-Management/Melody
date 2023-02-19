import React, {ReactNode} from 'react';
import "./PageContainer.css"
import {Button} from "../Inputs/Button";

export const PageContainer = (props: {
    title: string,
    children: ReactNode,
    buttonLabel: string,
    onButtonClick: () => void
}) => {
    const {
        title,
        children,
        buttonLabel,
        onButtonClick
    } = props

    //TODO prop for different bg colors for header? and also different options like dropdown, etc.. so can be used in various places

    return (
        <div className="melody-bg-white melody-shadow melody-rounded-lg">
            <div className="melody-p-3 melody-rounded-t-lg melody-text-white melody-bg-gray-800 melody-flex melody-flex-col sm:melody-flex-row melody-justify-between melody-items-center">
                <h2 className="melody-text-lg melody-font-medium melody-mb-4 sm:melody-mb-0">{title}</h2>
                <Button label={buttonLabel} onClick={onButtonClick} color={'secondary'} />
            </div>

            <div className="melody-p-6">
                {children}
            </div>
        </div>
    );
};