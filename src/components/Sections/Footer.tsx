'use client'

import "./Footer.css"
import Link from "next/link";
import { Icon } from "../Layouts/Icon";
import { motion } from "framer-motion";
import { Label } from "../Layouts/Label";
import { FooterProps } from "../../components/types";

export function Footer(props: FooterProps) {

    const {
        companyName,
        mainContentNavigation,
        socialMedia,
        legalLinks
    } = props

    return (
        <footer aria-label="Site Footer" className="melody-bg-primary-100 melody-border-primary-100 melody-border-t melody-relative melody-overflow-hidden">
            <div className="melody-mx-auto melody-z-[3] melody-relative melody-text-white">
                {mainContentNavigation && mainContentNavigation.length > 0 &&
                  <div className="lg:melody-flex lg:melody-gap-8 melody-justify-center melody-px-2 melody-py-16 sm:melody-px-6 lg:melody-px-8">
                    <div className="melody-mt-8 melody-grid melody-grid-cols-3 melody-gap-x-36 melody-gap-y-12 lg:melody-mt-0 lg:melody-grid-cols-3 lg:melody-gap-y-16">
                        {mainContentNavigation?.map((contentItem, index) => (
                            <div className="melody-col-span-2 sm:melody-col-span-1" key={index}>
                                <Label label={contentItem.title} bold={true} size={"large"} color={"white"} />

                                <nav className="melody-mt-6">
                                    <ul className="melody-space-y-4 melody-text-sm melody-list-none">
                                        {contentItem.items.map((linkItem, index) => (
                                            <li key={index}>
                                                <Link href={linkItem.href} className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                                    {linkItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ))}
                    </div>
                  </div>
                }

                <div className="melody-border-t melody-border-gray-300 melody-bg-white melody-px-2 melody-py-8 sm:melody-px-6 lg:melody-px-8">
                    <div className="sm:melody-flex sm:melody-justify-between">
                        {companyName &&
                            <p className="melody-text-xs melody-text-gray-700">
                                {companyName}
                            </p>
                        }

                        {socialMedia && socialMedia.length > 0 &&
                            <ul className="melody-col-span-2 melody-flex melody-justify-center melody-p-2 md:melody-p-0 melody-gap-6 lg:melody-col-span-5 melody-list-none">
                                {socialMedia?.map((linkItem, index) => (
                                    <li key={index}>
                                        <motion.div whileHover={{scale: 0.90}}>
                                            <Link
                                                href={linkItem.href}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                                <span className="melody-sr-only">{linkItem.title}</span>
                                                {linkItem.icon && <Icon icon={linkItem.icon} />}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        }

                        {legalLinks && legalLinks.length > 0 &&
                            <nav className="melody-mt-8 sm:melody-mt-0">
                                <ul className="melody-flex melody-flex-wrap melody-justify-start melody-gap-4 melody-text-xs lg:melody-justify-end melody-list-none">
                                    {legalLinks?.map((linkItem, index) => (
                                        <li key={index}>
                                            <Link href={linkItem.href} className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                                {linkItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}