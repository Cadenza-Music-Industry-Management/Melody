"use client"

import "./CadenzaPricingLayout.css"
import adagio from "../../assets/adagio_logo.png"
import moderato from "../../assets/moderato_logo.png"
import vivace from "../../assets/vivace_logo.png"
import {ContentCreationLimits} from "../../utils/constants";
import {formatBytes} from "../../utils/functions";
import Image from "next/image";
import { Icon } from "../Layouts/Icon";
import { Label } from "@/components/Melody/src/components/Layouts/Label";
import { motion } from "framer-motion";
import { Button } from "@/components/Melody/src/components/Inputs/Button";

export const CadenzaPricingLayout = (props: {
    organizationDashboard?: boolean,
    tierSelection?: string | null,
    onTierSelection?: (tierSelected: string) => void,
    currentOrgTier?: string | undefined
}) => {
    const {
        organizationDashboard = false,
        tierSelection,
        onTierSelection,
        currentOrgTier
    } = props

    const tierDetails = [
        {
            logo: adagio,
            title: "Adagio",
            price: "$0/month",
            yearlyPrice: "Free to use!",
            items: [
                { text: "Access to Releases management", subText: `(Limit: ${ContentCreationLimits.RELEASE_ADAGIO})` },
                { text: "Access to Artist management", subText: `(Limit: ${ContentCreationLimits.ARTIST_ADAGIO})` },
                { text: "Access to Apparel Item management", subText: `(Limit: ${ContentCreationLimits.APPAREL_ADAGIO})` },
                { text: "Access to Apparel Order management", subText: `(Limit: ${ContentCreationLimits.APPAREL_ORDER_ADAGIO})` },
                { text: "Access to Blog Post management", subText: `(Limit: ${ContentCreationLimits.BLOG_ADAGIO})` },
                { text: "Access to Planning Board tool", subText: "" },
                { text: "Access to Calendar tool", subText: "" },
                { text: "Access to Staff Management tool", subText: `(Limit: ${ContentCreationLimits.STAFF_ADAGIO} accounts)` },
                { text: "Access to Public Site tool", subText: "" },
                { text: "Access to File Storage tool", subText: `(Storage limit: ${formatBytes(ContentCreationLimits.FILE_STORAGE_ADAGIO)})` },
                { text: "Access to Email Hub tool", subText: `(Tracked emails per month limit: ${ContentCreationLimits.EMAIL_ADAGIO})` }
            ]
        },
        {
            logo: moderato,
            title: "Moderato",
            price: "$5/month",
            yearlyPrice: "$50/year (save $10)",
            items: [
                { text: "Access to Accounting tool", subText: "(Available for free on Adagio tier until Dec. 31st, 2024)" },
                { text: "Access to Event History tool", subText: "" },
                { text: "Additional customization in Public Site Builder", subText: "(About Us & Contact Us pages)" },
                { text: `Staff account limit raised to ${ContentCreationLimits.STAFF_MODERATO}`, subText: "" },
                { text: `Release limit raised to ${ContentCreationLimits.RELEASE_MODERATO}`, subText: "" },
                { text: `Artist limit raised to ${ContentCreationLimits.ARTIST_MODERATO}`, subText: "" },
                { text: `Apparel Item limit raised to ${ContentCreationLimits.APPAREL_MODERATO}`, subText: "" },
                { text: `Apparel Order limit raised to ${ContentCreationLimits.APPAREL_ORDER_MODERATO}`, subText: "" },
                { text: `Blog Post limit raised to ${ContentCreationLimits.BLOG_MODERATO}`, subText: "" },
                { text: `File Storage limit raised to: ${formatBytes(ContentCreationLimits.FILE_STORAGE_MODERATO)}`, subText: "" },
                { text: `Email Hub limit raised to: ${ContentCreationLimits.EMAIL_MODERATO}`, subText: "" },
                { text: "Everything from the Adagio tier", subText: "" }
            ]
        },
        {
            logo: vivace,
            title: "Vivace",
            price: "$15/month",
            yearlyPrice: "$150/year (save $30)",
            items: [
                { text: "Access to Music Promotion tool ", subText: "(Available for free on Adagio tier until Dec. 31st, 2024)" },
                { text: "Ability to export all data from each content type to excel document", subText: "" },
                { text: "Ability to create data through CSV importing", subText: "(Available for free on Adagio tier until Dec. 31st, 2024)" },
                { text: "Additional customization in Public Site Builder", subText: "(Music Player page, Custom Footers, & Vivace-exclusive layouts)" },
                { text: `Staff account limit raised to ${ContentCreationLimits.STAFF_VIVACE}`, subText: "" },
                { text: `Release limit raised to ${ContentCreationLimits.RELEASE_VIVACE}`, subText: "" },
                { text: `Artist limit raised to ${ContentCreationLimits.ARTIST_VIVACE}`, subText: "" },
                { text: `Apparel Item limit raised to ${ContentCreationLimits.APPAREL_VIVACE}`, subText: "" },
                { text: `Apparel Order limit raised to ${ContentCreationLimits.APPAREL_ORDER_VIVACE}`, subText: "" },
                { text: `Blog Post limit raised to ${ContentCreationLimits.BLOG_VIVACE}`, subText: "" },
                { text: `File Storage limit raised to: ${formatBytes(ContentCreationLimits.FILE_STORAGE_VIVACE)}`, subText: "" },
                { text: `Email Hub limit raised to: ${ContentCreationLimits.EMAIL_VIVACE}`, subText: "" },
                { text: "Everything from the Moderato and Adagio tiers", subText: "" }
            ]
        }
    ]

    return (
        <div className="melody-min-w-screen">
            <div className="melody-w-full melody-mx-auto melody-p-5 melody-text-gray-600">
                <div
                    className="melody-text-center melody-w-full melody-flex melody-flex-col melody-max-w-5xl melody-mx-auto">
                    {/*TODO convert to labels*/}
                    {!organizationDashboard &&
                      <>
                        <h1 className="melody-text-4xl melody-font-bold melody-mb-5">
                          Subscription Tiers
                        </h1>

                        <h3 className="melody-text-md melody-font-medium melody-mb-5">
                          Each subscription applies to a specific organization.
                        </h3>
                      </>
                    }

                    <div className="melody-text-white melody-p-2 melody-m-4 melody-text-left melody-rounded-lg melody-bg-blue-400 melody-shadow">
                        <p className={"melody-text-sm melody-font-medium"}>
                            If selecting a paid subscription for your organization, use the code &apos;
                            <b>CadenzaMIMDiscount</b>&apos; for 50% off!*
                        </p>
                    </div>
                </div>

                <div className="melody-max-w-6xl melody-flex melody-flex-col md:melody-flex-row melody-gap-16 melody-mx-auto">
                    {tierDetails.map((tier, index) => (
                        <motion.div whileHover={{scale: 0.98}} key={index} className={`melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-flex melody-flex-col melody-p-8 melody-shadow-main melody-rounded`}>
                            <div className="melody-w-full melody-flex-grow">
                                <div className={"melody-text-center melody-border-b melody-border-b-gray-200 melody-py-2"}>
                                    <Image src={tier.logo} alt={tier.title} style={{width: "100%", minWidth: 150, maxWidth: 250}}/>
                                    <Label label={tier.price} size={'xlarge'} bold={true} />
                                    <Label label={tier.yearlyPrice} size={'medium'} />

                                    {organizationDashboard &&
                                        <div className={"melody-flex melody-gap-x-2 melody-h-12 melody-my-2"}>
                                            {tier.title !== "Adagio" && currentOrgTier === "Adagio" &&
                                              <>
                                                <Button label={"Checkout Monthly"}
                                                        onClick={() => {
                                                            if (onTierSelection) onTierSelection(`${tier.title}_monthly`)
                                                        }}
                                                        color={tierSelection === `${tier.title}_monthly` ? "primary" : "secondary"}
                                                        size={"small"}
                                                        variant={"solid"} />

                                                <Button label={"Checkout Yearly"}
                                                        onClick={() => {
                                                            if (onTierSelection) onTierSelection(`${tier.title}_yearly`)
                                                        }}
                                                        color={tierSelection === `${tier.title}_yearly` ? "primary" : "secondary"}
                                                        size={"small"}
                                                        variant={"solid"} />
                                              </>
                                            }
                                        </div>
                                    }
                                </div>

                                <ul className="melody-text-sm melody-my-4">
                                    {tier.items.map((item, index) => (
                                        <li key={index} className="melody-leading-tight melody-mb-3 melody-flex">
                                            <Icon icon={'solidCheck'} additionalClasses={'melody-text-green-600 melody-p-0.5 melody-pr-2'} />
                                            <p>
                                                {item.text}
                                                {item?.subText &&
                                                  <span className={"melody-text-gray-400 melody-text-xs"}>
                                                      {" "}{item.subText}
                                                    </span>
                                                }
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={"melody-p-4 melody-text-center"}>
                    {/*TODO labels*/}
                    <p className={"melody-text-xs melody-font-medium"}>
                        *50% off for the entire year or 12 months of 50% off for a monthly subscription.
                    </p>
                    <p className={"melody-text-xs melody-font-medium"}>
                        Valid until December 31st, 2024.
                    </p>
                </div>
            </div>
        </div>
    )
}