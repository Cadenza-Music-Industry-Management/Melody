import React, { Fragment, useRef } from 'react';
import "./ModalTemplate.css"
import { Dialog, Transition  } from '@headlessui/react'

export const ModalTemplate = (props: {
    open: boolean,
    setOpen: (open: boolean) => void
}) => {
    const {
        open,
        setOpen
    } = props

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="melody-relative melody-z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="melody-ease-out melody-duration-300"
                    enterFrom="melody-opacity-0"
                    enterTo="melody-opacity-100"
                    leave="melody-ease-in melody-duration-200"
                    leaveFrom="melody-opacity-100"
                    leaveTo="melody-opacity-0"
                >
                    <div className="melody-fixed melody-inset-0 melody-bg-gray-500 melody-bg-opacity-75 melody-transition-opacity" />
                </Transition.Child>

                <div className="melody-fixed melody-inset-0 melody-z-10 melody-overflow-y-auto">
                    <div className="melody-flex melody-min-h-full melody-items-end melody-justify-center melody-p-4 melody-text-center sm:melody-items-center sm:melody-p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="melody-ease-out melody-duration-300"
                            enterFrom="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95"
                            enterTo="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leave="melody-ease-in melody-duration-200"
                            leaveFrom="melody-opacity-100 melody-translate-y-0 sm:melody-scale-100"
                            leaveTo="melody-opacity-0 melody-translate-y-4 sm:melody-translate-y-0 sm:melody-scale-95"
                        >
                            <Dialog.Panel className="melody-relative melody-transform melody-overflow-hidden melody-rounded-lg melody-bg-white melody-text-left melody-shadow-xl melody-transition-all sm:melody-my-8 sm:melody-w-full sm:melody-max-w-lg">
                                <div className="melody-bg-white melody-px-4 melody-pt-5 melody-pb-4 sm:melody-p-6 sm:melody-pb-4">
                                    <div className="sm:melody-flex sm:melody-items-start">
                                        <div className="melody-mx-auto melody-flex melody-h-12 melody-w-12 melody-flex-shrink-0 melody-items-center melody-justify-center melody-rounded-full melody-bg-red-100 sm:melody-mx-0 sm:melody-h-10 sm:melody-w-10">
                                            {/*TODO icon here*/}
                                            <svg className="melody-h-6 melody-w-6 melody-text-red-600" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke-width="1.5"
                                                 stroke="currentColor"
                                                 aria-hidden="true">
                                                <path stroke-linecap="round"
                                                      stroke-linejoin="round"
                                                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                                            </svg>
                                        </div>
                                        <div className="melody-mt-3 melody-text-center sm:melody-mt-0 sm:melody-ml-4 sm:melody-text-left">
                                            <Dialog.Title as="h3" className="melody-text-lg melody-font-medium melody-leading-6 melody-text-gray-900">
                                                Deactivate account
                                            </Dialog.Title>
                                            <div className="melody-mt-2">
                                                <p className="melody-text-sm melody-text-gray-500">
                                                    Are you sure you want to deactivate your account? All of your data will be permanently
                                                    removed. This action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="melody-bg-gray-50 melody-px-4 melody-py-3 sm:melody-flex sm:melody-flex-row-reverse sm:melody-px-6">
                                    <button
                                        type="button"
                                        className="melody-inline-flex melody-w-full melody-justify-center melody-rounded-md melody-border melody-border-transparent melody-bg-red-600 melody-px-4 melody-py-2 melody-text-base melody-font-medium melody-text-white melody-shadow-sm hover:melody-bg-red-700 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-red-500 focus:melody-ring-offset-2 sm:melody-ml-3 sm:melody-w-auto sm:melody-text-sm"
                                        onClick={() => setOpen(false)}>
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="melody-mt-3 melody-inline-flex melody-w-full melody-justify-center melody-rounded-md melody-border melody-border-gray-300 melody-bg-white melody-px-4 melody-py-2 melody-text-base melody-font-medium melody-text-gray-700 melody-shadow-sm hover:melody-melody-bg-gray-50 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-indigo-500 focus:melody-ring-offset-2 sm:melody-mt-0 sm:melody-ml-3 sm:melody-w-auto sm:melody-text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}>
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

// export const ModalTemplate = (props: {
//     variant: string,
//     size: string,
//     open: boolean
// }) => {
//     const {
//         variant,
//         size,
//         open
//     } = props
//
//     return (
//         <div className={`melody-relative melody-z-10 ${open ? 'melody-block' : 'melody-hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
//               {/*// Background backdrop, show/hide based on modal state.*/}
//               {/*//*/}
//               {/*// Entering: "ease-out duration-300"*/}
//               {/*//   From: "opacity-0"*/}
//               {/*//   To: "opacity-100"*/}
//               {/*// Leaving: "ease-in duration-200"*/}
//               {/*//   From: "opacity-100"*/}
//               {/*//   To: "opacity-0"*/}
//             <div className="melody-fixed melody-inset-0 melody-bg-gray-500 melody-bg-opacity-75 melody-transition-opacity"></div>
//
//             <div className="melody-fixed melody-inset-0 melody-z-10 melody-overflow-y-auto">
//                 <div className="melody-flex melody-min-h-full melody-items-end melody-justify-center melody-p-4 melody-text-center sm:melody-items-center sm:melody-p-0">
//                       {/*// Modal panel, show/hide based on modal state.*/}
//                       {/*//*/}
//                       {/*// Entering: "ease-out duration-300"*/}
//                       {/*//   From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
//                       {/*//   To: "opacity-100 translate-y-0 sm:scale-100"*/}
//                       {/*// Leaving: "ease-in duration-200"*/}
//                       {/*//   From: "opacity-100 translate-y-0 sm:scale-100"*/}
//                       {/*//   To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"*/}
//                     <div className="melody-relative melody-transform melody-overflow-hidden melody-rounded-lg melody-bg-white melody-text-left melody-shadow-xl melody-transition-all sm:melody-my-8 sm:melody-w-full sm:melody-max-w-lg">
//                         <div className="melody-bg-white melody-px-4 melody-pt-5 melody-pb-4 sm:melody-p-6 sm:melody-pb-4">
//                             <div className="sm:melody-flex sm:melody-items-start">
//                                 <div className="melody-mx-auto melody-flex melody-h-12 melody-w-12 melody-flex-shrink-0 melody-items-center melody-justify-center melody-rounded-full melody-bg-red-100 sm:melody-mx-0 sm:melody-h-10 sm:melody-w-10">
//                                     <svg className="h-6 w-6 text-red-600"
//                                          xmlns="http://www.w3.org/2000/svg"
//                                          fill="none"
//                                          viewBox="0 0 24 24"
//                                          stroke-width="1.5"
//                                          stroke="currentColor"
//                                          aria-hidden="true">
//                                         <path stroke-linecap="round"
//                                               stroke-linejoin="round"
//                                               d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
//                                     </svg>
//                                 </div>
//                                 <div className="melody-mt-3 melody-text-center sm:mt-0 sm:melody-ml-4 sm:melody-text-left">
//                                     <h3 className="melody-text-lg melody-font-medium melody-leading-6 melody-text-gray-900"
//                                         id="modal-title">Deactivate account</h3>
//                                     <div className="melody-mt-2">
//                                         <p className="melody-text-sm melody-text-gray-500">Are you sure you want to deactivate your
//                                             account? All of your data will be permanently removed. This action cannot be
//                                             undone.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="melody-bg-gray-50 melody-px-4 melody-py-3 sm:melody-flex sm:melody-flex-row-reverse sm:melody-px-6">
//                             <button type="button"
//                                     className="melody-inline-flex melody-w-full melody-justify-center melody-rounded-md melody-border melody-border-transparent melody-bg-red-600 melody-px-4 melody-py-2 melody-text-base melody-font-medium melody-text-white melody-shadow-sm hover:melody-bg-red-700 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-red-500 focus:melody-ring-offset-2 sm:melody-ml-3 sm:melody-w-auto sm:melody-text-sm">Deactivate
//                             </button>
//                             <button type="button"
//                                     className="melody-mt-3 melody-inline-flex melody-w-full melody-justify-center melody-rounded-md melody-border melody-border-gray-300 melody-bg-white melody-px-4 melody-py-2 melody-text-base melody-font-medium melody-text-gray-700 melody-shadow-sm hover:melody-bg-gray-50 focus:melody-outline-none focus:melody-ring-2 focus:melody-ring-indigo-500 focus:melody-ring-offset-2 sm:melody-mt-0 sm:melody-ml-3 sm:melody-w-auto sm:melody-text-sm">Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };