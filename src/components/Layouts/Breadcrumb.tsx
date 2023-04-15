import "./Breadcrumb.css"
import { BreadcrumbItemProps, BreadcrumbProps } from "@/components/Melody/src/components/types";
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

export const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        size = 'medium',
        variant = 'transparent',
        items
    } = props

    function getBreadcrumbItemContents(item: BreadcrumbItemProps) {
        return <div className={"melody-breadcrumb-item"}>

            {item.icon && !item.icon.rightAligned && <div className={"melody-mr-0.5"}>
                <Icon icon={item.icon.icon} additionalStyles={item.icon.additionalStyles} additionalClasses={item.icon.additionalClasses} />
            </div>}

            {item.label}

            {item.icon && item.icon.rightAligned && <div className={"melody-mr-0.5"}>
                <Icon icon={item.icon.icon} additionalStyles={item.icon.additionalStyles} additionalClasses={item.icon.additionalClasses} />
            </div>}

        </div>
    }

    return (
        <nav className={`melody-breadcrumb ${size} ${variant}`} aria-label="Breadcrumb">
            <ol className="melody-breadcrumb-item-container">
                {items.map((item, index) => (
                    <li className="melody-inline-flex melody-items-center" key={index}>
                        {item.link ?
                            <Link href={item.link}>
                                {getBreadcrumbItemContents(item)}
                            </Link>
                            :
                            getBreadcrumbItemContents(item)
                        }

                        {index !== items.length - 1 &&
                            <Icon icon={'caretRight'} additionalClasses={'melody-ml-2 melody-font-bold'} />
                        }
                    </li>
                ))}
            </ol>
        </nav>
    )
}