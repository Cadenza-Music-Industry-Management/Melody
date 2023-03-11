import React, {ReactNode} from 'react';
import "./PageContainer.css"
import { LabelProps } from "components/Melody/src/components/types";
import { Label } from "components/Melody/src/components/Layouts/Label";

export const PageContainer = (props: {
    title?: LabelProps,
    textAlignClass?: 'melody-text-left' | 'melody-text-center' | 'melody-text-right', //TODO only used when there is no button passed in
    headerBGColor?: string,
    headerTextColor?: string,
    children: ReactNode,
    button?: ReactNode,
    additionalClasses?: string
}) => {
    const {
        title,
        textAlignClass = 'melody-text-left',
        headerBGColor = 'melody-bg-white',
        headerTextColor = 'melody-text-black-0',
        children,
        button,
        additionalClasses
    } = props

    //TODO prop for different bg colors for header? and also different options like dropdown, etc.. so can be used in various places

    return (
        <div className="melody-bg-white melody-shadow melody-rounded-lg melody-w-full">
            {(title || button) &&
              <div className={`melody-border-b border-gray-600 melody-p-3 melody-rounded-t-lg ${additionalClasses} ${textAlignClass} ${headerTextColor} ${headerBGColor} ${button ? 'melody-flex melody-flex-col sm:melody-flex-row' : ''} melody-justify-between melody-items-center`}>
                  {title && <Label {...{...title, additionalClasses: `${button ? 'melody-mb-4 sm:melody-mb-0' : ''}`}} />}
                {button && button}
              </div>
            }

            <div className="melody-p-6">
                {children}
            </div>
        </div>
    );
};