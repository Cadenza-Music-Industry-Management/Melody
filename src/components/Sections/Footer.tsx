import React from 'react';
import "./Footer.css"
import Link from "next/link";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

export const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="melody-border-primary-100 melody-border-t melody-border-primary-100">
            <div className="melody-mx-auto melody-max-w-screen-xl melody-px-4 melody-py-16 sm:melody-px-6 lg:melody-px-8">
                <div className="lg:melody-flex lg:melody-gap-8 melody-justify-center">
                    <div className="melody-mt-8 melody-grid melody-grid-cols-3 melody-gap-16 lg:melody-mt-0 lg:melody-grid-cols-3 lg:melody-gap-y-16">
                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-text-gray-900">Overview</p>

                            <nav aria-label="Footer Navigation - Services" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm">
                                    <li>
                                        <Link href="/" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/media" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Press & Media
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/about" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            About Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="https://cadenzamim.com/climate"
                                              rel="noopener noreferrer"
                                              target="_blank"
                                              className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Climate
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-text-gray-900">Pricing</p>

                            <nav aria-label="Footer Navigation - Company" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm">
                                    <li>
                                        <Link href="/pages/pricing" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Subscriptions
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/refund" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Refund Policy
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="melody-col-span-2 sm:melody-col-span-1">
                            <p className="melody-font-medium melody-text-gray-900">Help</p>

                            <nav aria-label="Footer Navigation - Company" className="melody-mt-6">
                                <ul className="melody-space-y-4 melody-text-sm">
                                    <li>
                                        <Link href="/pages/support" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Support
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/contact" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Contact Us
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/pages/changelog" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                            Changelog
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/*<div className="melody-col-span-2 sm:melody-col-span-1">*/}
                        {/*    <p className="melody-font-medium melody-text-gray-900">Legal</p>*/}

                        {/*    <nav aria-label="Footer Navigation - Legal" className="melody-mt-6">*/}
                        {/*        <ul className="melody-space-y-4 melody-text-sm">*/}
                        {/*            <li>*/}
                        {/*                <Link href="#" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">*/}
                        {/*                    Terms Of Service*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}

                        {/*            <li>*/}
                        {/*                <Link href="#" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">*/}
                        {/*                    Privacy Policy*/}

                        {/*                </Link>*/}
                        {/*            </li>*/}

                        {/*            <li>*/}
                        {/*                <Link href="#" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">*/}
                        {/*                    Cookies*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}

                        {/*            <li>*/}
                        {/*                <Link href="#" className="melody-text-gray-700 melody-transition hover:melody-opacity-75">*/}
                        {/*                    User Guidelines*/}
                        {/*                </Link>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </nav>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="melody-mt-8 melody-border-t melody-border-gray-100 melody-pt-8">
                    <div className="sm:melody-flex sm:melody-justify-between">
                        <p className="melody-text-xs melody-text-gray-500">
                            &copy; 2023. Cadenza Music Industry Management LLC. All rights reserved.
                        </p>

                        <ul className="melody-col-span-2 melody-flex melody-justify-center melody-p-2 md:melody-p-0 melody-gap-6 lg:melody-col-span-5">
                            <li>
                                <Link
                                    href="https://www.facebook.com/cadenzamim"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                    <span className="melody-sr-only">Facebook</span>
                                    <Icon icon={'facebook'} />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://www.instagram.com/cadenzamim"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                    <span className="melody-sr-only">Instagram</span>
                                    <Icon icon={'instagram'} />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="https://twitter.com/cadenzamim"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="melody-text-gray-700 melody-transition hover:melody-opacity-75">
                                    <span className="melody-sr-only">Twitter</span>
                                    <Icon icon={'twitter'} />
                                </Link>
                            </li>
                        </ul>

                        <nav aria-label="Footer Navigation - Support" className="melody-mt-8 sm:melody-mt-0">
                            <ul className="melody-flex melody-flex-wrap melody-justify-start melody-gap-4 melody-text-xs lg:melody-justify-end">
                                <li>
                                    <Link href="/pages/tos" className="melody-text-gray-500 melody-transition hover:melody-opacity-75">
                                        Terms Of Service
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/privacy" className="melody-text-gray-500 melody-transition hover:melody-opacity-75">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/cookies" className="melody-text-gray-500 melody-transition hover:melody-opacity-75">
                                        Cookies
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/pages/userguidelines" className="melody-text-gray-500 melody-transition hover:melody-opacity-75">
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