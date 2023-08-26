import "./Footer.css"
import Link from "next/link";
import { Icon } from "../Layouts/Icon";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="melody-bg-primary-100 melody-border-primary-100 melody-border-t melody-border-primary-100 melody-relative melody-overflow-hidden">

            {/*<div className={"melody-absolute melody-left-0 melody-right-0 melody-top-0 melody-z-[2]"}>*/}
            {/*    /!*Note: Generated from https://getwaves.io/ and expanded with https://www.photopea.com/*!/*/}
            {/*    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 1500" width="4000"*/}
            {/*         height="1500">*/}
            {/*        <defs>*/}
            {/*            <image width="4320" height="960" id="img1"*/}
            {/*                   href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTQ0MCAzMjAiPjxwYXRoIGZpbGw9IiM5Zjg1NjAiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTAsMEwzMCwyNi43QzYwLDUzLDEyMCwxMDcsMTgwLDEyMi43QzI0MCwxMzksMzAwLDExNywzNjAsOTAuN0M0MjAsNjQsNDgwLDMyLDU0MCwzMkM2MDAsMzIsNjYwLDY0LDcyMCw3NC43Qzc4MCw4NSw4NDAsNzUsOTAwLDc0LjdDOTYwLDc1LDEwMjAsODUsMTA4MCw4NS4zQzExNDAsODUsMTIwMCw3NSwxMjYwLDg1LjNDMTMyMCw5NiwxMzgwLDEyOCwxNDEwLDE0NEwxNDQwLDE2MEwxNDQwLDMyMEwxNDEwLDMyMEMxMzgwLDMyMCwxMzIwLDMyMCwxMjYwLDMyMEMxMjAwLDMyMCwxMTQwLDMyMCwxMDgwLDMyMEMxMDIwLDMyMCw5NjAsMzIwLDkwMCwzMjBDODQwLDMyMCw3ODAsMzIwLDcyMCwzMjBDNjYwLDMyMCw2MDAsMzIwLDU0MCwzMjBDNDgwLDMyMCw0MjAsMzIwLDM2MCwzMjBDMzAwLDMyMCwyNDAsMzIwLDE4MCwzMjBDMTIwLDMyMCw2MCwzMjAsMzAsMzIwTDAsMzIwWiI+PC9wYXRoPjwvc3ZnPg==" />*/}
            {/*        </defs>*/}
            {/*        <path id="Shape 1" fill="#9f8560" d="m0 705.7h4000v1036.3h-4000z" />*/}
            {/*        <use id="wave (4)" href="#img1" transform="matrix(.928,0,0,.928,0,0)" />*/}
            {/*    </svg>*/}
            {/*</div>*/}

            <div className="melody-mx-auto melody-z-[3] melody-relative melody-text-white">
                <div className="lg:melody-flex lg:melody-gap-8 melody-justify-center melody-px-2 melody-py-16 sm:melody-px-6 lg:melody-px-8">
                    <div className="melody-mt-8 melody-grid melody-grid-cols-3 melody-gap-16 lg:melody-mt-0 lg:melody-grid-cols-3 lg:melody-gap-y-16">
                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-underline">Overview</p>

                            <nav aria-label="Footer Navigation - Services" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm melody-list-none">
                                    <li>
                                        <Link href="/" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/media" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Press & Media
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/about" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://cadenzamim.com/climate"
                                              rel="noopener noreferrer"
                                              target="_blank"
                                              className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Climate
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-underline">Pricing</p>

                            <nav aria-label="Footer Navigation - Company" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm melody-list-none">
                                    <li>
                                        <Link href="/pages/pricing" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Subscriptions
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/refund" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-underline">Help</p>

                            <nav aria-label="Footer Navigation - Company" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm melody-list-none">
                                    <li>
                                        <Link href="/pages/support" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Support
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/contact" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Contact Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/changelog" className="melody-text-gray-200 melody-transition hover:melody-opacity-75">
                                            Changelog
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="melody-mt-8 melody-border-t melody-border-gray-300 melody-pt-8 melody-bg-white melody-px-2 melody-py-16 sm:melody-px-6 lg:melody-px-8">
                    <div className="sm:melody-flex sm:melody-justify-between">
                        <p className="melody-text-xs melody-text-gray-700">
                            &copy; 2023. Cadenza Music Industry Management LLC. All rights reserved.
                        </p>

                        <ul className="melody-col-span-2 melody-flex melody-justify-center melody-p-2 md:melody-p-0 melody-gap-6 lg:melody-col-span-5 melody-list-none">
                            {[
                                { href: "https://www.facebook.com/cadenzamim", title: "Facebook", icon: "facebook" },
                                { href: "https://www.instagram.com/cadenzamim", title: "Instagram", icon: "instagram" },
                                { href: "https://twitter.com/cadenzamim", title: "Twitter", icon: "twitter" }
                            ].map((socialMedia, index) => (
                                <li key={index}>
                                    <motion.div whileHover={{scale: 0.90}}>
                                        <Link
                                            href={socialMedia.href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            <span className="melody-sr-only">{socialMedia.title}</span>
                                            <Icon icon={socialMedia.icon} />
                                        </Link>
                                    </motion.div>
                                </li>
                            ))}
                        </ul>

                        <nav aria-label="Footer Navigation - Support" className="melody-mt-8 sm:melody-mt-0">
                            <ul className="melody-flex melody-flex-wrap melody-justify-start melody-gap-4 melody-text-xs lg:melody-justify-end melody-list-none">
                                <li>
                                    <Link href="/pages/tos" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                        Terms Of Service
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/privacy" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/cookies" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                        Cookies
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/userguidelines" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                        User Guidelines
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}