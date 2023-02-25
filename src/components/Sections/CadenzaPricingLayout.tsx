import React, {useState} from 'react';
import "./CadenzaPricingLayout.css"
import adagio from "../../assets/adagio_logo.png"
import moderato from "../../assets/moderato_logo.png"
import vivace from "../../assets/vivace_logo.png"
import {ContentCreationLimits} from "../../utils/constants";
import {formatBytes} from "../../utils/functions";

export const CadenzaPricingLayout = (props: {
    size: string
}) => {
    const {
        size
    } = props

    const [viewingMonthly, setViewingMonthly] = useState(true)

    return (
        <div className="melody-min-w-screen melody-min-h-screen melody-bg-gray-50 melody-px-5 melody-py-5">
            <div className="melody-w-full melody-mx-auto melody-bg-white melody-px-5 melody-py-5 melody-text-gray-600 melody-mb-5 melody-rounded-md">
                <div className="melody-max-w-5xl melody-mx-auto md:melody-flex">

                    <div className="md:melody-w-1/4 md:melody-flex md:melody-flex-col">
                        <div className="melody-text-left melody-w-full melody-flex-grow md:melody-pr-5">
                            <h1 className="melody-text-4xl melody-font-bold melody-mb-5 melody-break-words">
                                Subscription Tiers
                            </h1>

                            <h3 className="melody-text-md melody-font-medium melody-mb-5">
                                A subscription applies to a specific organization.
                            </h3>

                            <div className="melody-text-white melody-p-2 melody-text-center melody-rounded-lg melody-bg-primary-300 melody-bg-opacity-75">
                                <p className={"melody-text-md melody-font-medium"}>
                                    If selecting a paid subscription for your organization, use the code 'CadenzaMIMDiscount' for 50% off!
                                </p>
                                <p className={"melody-text-sm melody-font-medium"}>
                                    50% off for the entire year or 12 months of 50% off for a monthly subscription
                                </p>
                                <p className={"melody-text-xs"}>
                                    Valid until December 31st
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:melody-w-3/4">
                        <div className="melody-max-w-4xl melody-mx-auto md:melody-flex">

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-4 md:melody-px-5 melody-py-4 md:melody-py-5 melody-mb-3 melody-mx-auto md:melody-my-2 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">
                                    <img src={adagio} alt={"Adagio"} style={{width: "100%", minWidth: 150, maxWidth: 250}}/>

                                    <h3 className="melody-text-center melody-font-bold melody-text-3xl melody-mb-5">
                                        Free
                                    </h3>

                                    <ul className="melody-text-sm melody-mb-4">
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Releases management (Limit: {ContentCreationLimits.RELEASE_ADAGIO})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Artist management (Limit: {ContentCreationLimits.ARTIST_ADAGIO})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Blog Post management (Limit: {ContentCreationLimits.BLOG_ADAGIO})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Apparel management (Limit: {ContentCreationLimits.APPAREL_ADAGIO})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Apparel Orders management (Limit: {ContentCreationLimits.APPAREL_ORDER_ADAGIO})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Planning Board tool
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Calendar tool
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Staff Management tool (Limit: {ContentCreationLimits.STAFF_ADAGIO} accounts)
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Public Site tool
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to File Storage tool (Storage limit: {formatBytes(ContentCreationLimits.FILE_STORAGE_ADAGIO)})
                                        </li>
                                          <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Email Hub tool (Tracked emails per month limit: {ContentCreationLimits.EMAIL_ADAGIO})
                                        </li>
                                    </ul>
                                </div>

                                {/*<div className="melody-w-full">*/}
                                {/*    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-5 melody-py-2 melody-transition-colors melody-w-full">*/}
                                {/*        Buy Now*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-4 md:melody-px-5 melody-py-4 md:melody-py-5 melody-mb-3 melody-mx-auto md:-melody-mx-3 md:melody-mb-0 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-relative md:melody-z-50 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">
                                    <img src={moderato} alt={"Moderato"} style={{width: "100%", minWidth: 150, maxWidth: 250}}/>

                                    <h3 className="melody-text-center melody-font-bold melody-text-3xl melody-mb-5">
                                        {viewingMonthly ?
                                            <span>
                                                 5<span className="text-sm">/month</span>
                                            </span>
                                            :
                                            <span>
                                                 50<span className="text-sm">/yearly (Save $10)</span>
                                            </span>
                                        }
                                    </h3>

                                    <ul className="melody-text-sm melody-mb-4">
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Accounting tool{" "}
                                            <span style={{fontSize: 12, fontWeight: "bold"}}>- Available for free on Adagio tier until Dec. 31st</span>
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Event History tool
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Additional customization in Public Site Builder (about us and contact us page)
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Staff account limit raised to {ContentCreationLimits.STAFF_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Release limit raised to {ContentCreationLimits.RELEASE_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Artist limit raised to {ContentCreationLimits.ARTIST_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Blog Post limit raised to {ContentCreationLimits.BLOG_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Apparel limit raised to {ContentCreationLimits.APPAREL_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Apparel Order limit raised to {ContentCreationLimits.APPAREL_ORDER_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            File Storage limit raised to: {formatBytes(ContentCreationLimits.FILE_STORAGE_MODERATO)}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Email Hub limit raised to: {ContentCreationLimits.EMAIL_MODERATO}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Everything from the Adagio tier
                                        </li>
                                    </ul>
                                </div>

                                {/*<div className="melody-w-full">*/}
                                {/*    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-5 melody-py-2 melody-transition-colors melody-w-full">*/}
                                {/*        Buy Now*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-4 md:melody-px-5 melody-py-4 md:melody-py-5 melody-mb-3 melody-mx-auto md:melody-my-2 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">

                                    <img src={vivace} alt={"Vivace"} style={{width: "100%", minWidth: 150, maxWidth: 250}}/>

                                    <h3 className="melody-text-center melody-font-bold melody-text-3xl melody-mb-5">
                                        {viewingMonthly ?
                                            <span>
                                                 15<span className="text-sm">/month</span>
                                            </span>
                                            :
                                            <span>
                                                 150<span className="text-sm">/yearly (Save $30)</span>
                                            </span>
                                        }
                                    </h3>

                                    <ul className="melody-text-sm melody-mb-4">
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Access to Music Promotion tool{" "}
                                            <span style={{fontSize: 12, fontWeight: "bold"}}>- Available for free on Adagio tier until Dec. 31st</span>
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Ability to export all data from each content type to excel document
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Ability to create data through CSV importing{" "}
                                            <span style={{fontSize: 12, fontWeight: "bold"}}>- Available for free on Adagio tier until Dec. 31st</span>
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Additional customization in Public Site Builder (music player page, custom footers, and
                                            Vivace-exclusive layouts)
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Staff account limit raised to {ContentCreationLimits.STAFF_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Release limit raised to {ContentCreationLimits.RELEASE_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Artist limit raised to {ContentCreationLimits.ARTIST_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Blog Post limit raised to {ContentCreationLimits.BLOG_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Apparel limit raised to {ContentCreationLimits.APPAREL_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Apparel Order limit raised to {ContentCreationLimits.APPAREL_ORDER_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            File Storage limit raised to: {formatBytes(ContentCreationLimits.FILE_STORAGE_VIVACE)}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Email Hub limit raised to: {ContentCreationLimits.EMAIL_VIVACE}
                                        </li>
                                        <li className="melody-leading-tight melody-mb-0.5">
                                            Everything from the Moderato and Adagio tiers
                                        </li>
                                    </ul>
                                </div>

                                {/*<div className="melody-w-full">*/}
                                {/*    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-5 melody-py-2 melody-transition-colors melody-w-full">*/}
                                {/*        Buy Now*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}