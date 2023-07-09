import "./PageContainer.css"
import { PageContainerProps } from "components/Melody/src/components/types";
import { Label } from "components/Melody/src/components/Layouts/Label";
import { IconTooltip } from "@/components/Melody/src/components/Layouts/IconTooltip";

export const PageContainer = (props: PageContainerProps) => {

    const {
        title,
        subTitle,
        textAlignClass = 'melody-text-left',
        headerBGColor = 'melody-bg-white',
        children,
        button,
        additionalClasses,
        tooltip
    } = props

    //TODO prop for different bg colors for header? and also different options like dropdown, etc.. so can be used in various places

    return (
        <div className="melody-bg-white melody-shadow melody-rounded-lg melody-w-full">
            {(title || button) &&
              <div className={`${children ? 'melody-border-b melody-border-gray-300 melody-rounded-t-lg' : 'melody-rounded-lg'} melody-px-4 melody-py-5 sm:melody-px-6 ${additionalClasses} ${textAlignClass} ${headerBGColor} ${button ? 'melody-flex melody-flex-col sm:melody-flex-row' : ''} melody-justify-between melody-items-center`}>
                  <div className={button ? 'melody-mb-4 sm:melody-mb-0' : ''}>
                      {title &&
                        <div className={"melody-flex melody-gap-x-0.5"}>
                            <Label {...title} />
                            {tooltip && <div className={"melody-pl-1"}><IconTooltip {...tooltip} /></div>}
                        </div>
                      }
                      {subTitle && <Label {...subTitle} />}
                  </div>

                  {button &&
                    <div className={"melody-min-w-[150px] melody-flex melody-justify-center"}>
                        {button}
                    </div>
                  }
              </div>
            }

            {children &&
              <div className="melody-p-6">
                  {children}
              </div>
            }
        </div>
    );
};