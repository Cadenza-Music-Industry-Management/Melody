import React from 'react';
import "./CadenzaPricingLayout.css"

export const CadenzaPricingLayout = (props: {
    size: string
}) => {
    const {
        size
    } = props

    return (
        <div className="melody-min-w-screen melody-min-h-screen melody-bg-gray-100 melody-px-5 melody-py-5">
            <div className="melody-w-full melody-mx-auto melody-bg-white melody-px-5 melody-py-10 melody-text-gray-600 melody-mb-10 melody-rounded-md">
                <div className="melody-max-w-5xl melody-mx-auto md:melody-flex">

                    <div className="md:melody-w-1/4 md:melody-flex md:melody-flex-col">
                        <div className="melody-text-left melody-w-full melody-flex-grow md:melody-pr-5">
                            <h1 className="melody-text-4xl melody-font-bold melody-mb-5">
                                Pricing
                            </h1>
                            <h3 className="melody-text-md melody-font-medium melody-mb-5">
                                This is where my description would go!
                            </h3>
                        </div>
                    </div>

                    <div className="md:melody-w-3/4">
                        <div className="melody-max-w-4xl melody-mx-auto md:melody-flex">

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-8 md:melody-px-10 melody-py-8 md:melody-py-10 melody-mb-3 melody-mx-auto md:melody-my-2 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">
                                    <h2 className="melody-text-center melody-font-bold melody-uppercase melody-mb-4">
                                        Adagio
                                    </h2>
                                    <h3 className="melody-text-center melody-font-bold melody-text-4xl melody-mb-5">
                                        Free
                                    </h3>
                                    <ul className="melody-text-sm melody-mb-8">
                                        <li className="melody-leading-tight">
                                            {/*TODO checkbox item*/}
                                            Lorem ipsum
                                        </li>
                                    </ul>
                                </div>
                                <div className="melody-w-full">
                                    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-10 melody-py-2 melody-transition-colors melody-w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-8 md:melody-px-10 melody-py-8 md:melody-py-10 melody-mb-3 melody-mx-auto md:-melody-mx-3 md:melody-mb-0 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-relative md:melody-z-50 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">
                                    <h2 className="melody-text-center melody-font-bold melody-uppercase melody-mb-4">
                                        Moderato
                                    </h2>
                                    <h3 className="melody-text-center melody-font-bold melody-text-4xl melody-mb-5">
                                        5<span className="text-sm">/mo</span>
                                    </h3>
                                    <ul className="melody-text-sm melody-mb-8">
                                        <li className="melody-leading-tight">
                                            {/*TODO checkbox item*/}
                                            Lorem ipsum
                                        </li>
                                    </ul>
                                </div>
                                <div className="melody-w-full">
                                    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-10 melody-py-2 melody-transition-colors melody-w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                            <div className="melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-px-8 md:melody-px-10 melody-py-8 md:melody-py-10 melody-mb-3 melody-mx-auto md:melody-my-2 melody-rounded-md melody-shadow-lg melody-shadow-gray-600 md:melody-flex md:melody-flex-col">
                                <div className="melody-w-full melody-flex-grow">
                                    <h2 className="melody-text-center melody-font-bold melody-uppercase melody-mb-4">
                                        Vivace
                                    </h2>
                                    <h3 className="melody-text-center melody-font-bold melody-text-4xl melody-mb-5">
                                        15<span className="melody-ltext-sm">/mo</span>
                                    </h3>
                                    <ul className="melody-text-sm melody-mb-8">
                                        <li className="melody-leading-tight">
                                            {/*TODO checkbox item*/}
                                            Lorem ipsum
                                        </li>
                                    </ul>
                                </div>
                                <div className="melody-w-full">
                                    <button className="melody-font-bold melody-bg-gray-600 hover:melody-bg-gray-700 melody-text-white melody-rounded-md px-10 melody-py-2 melody-transition-colors melody-w-full">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}