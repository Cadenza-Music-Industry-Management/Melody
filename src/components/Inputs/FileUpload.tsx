import './FileUpload.css'
import { ChangeEvent } from "react";
import Image from "next/image";

//TODO move to melody interface types file
export const FileUpload = (props: {
    variant: string, //bar, dropdown
    size: string,
    label: string,
    multiple: boolean,
    acceptedFileTypes?: string,
    onChange: (changeEvent: ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean
}) => {
    const {
        variant,
        size,
        label,
        multiple,
        acceptedFileTypes,
        onChange,
        disabled = false
    } = props

    //TODO sizes of file upload here https://tailwind-elements.com/docs/standard/forms/file-input/#:~:text=Tailwind%20File%20input%20component%20File%20upload%20input%20built,any%20other%20file%20type%29%20from%20the%20local%20storage.

    //TODO need to create variant dropzone

    return (
        <div className="flex justify-center">
            <label className="melody-text-sm melody-font-bold melody-text-gray-500 melody-tracking-wide">
                {label}
            </label>

            {variant === 'bar' ?
                <div className="mb-3 w-96">
                    <input className="melody-file-upload melody-block melody-w-full melody-text-sm melody-text-gray-900 melody-border melody-border-gray-300 melody-rounded-lg melody-cursor-pointer melody-bg-gray-50 dark:melody-text-gray-400 focus:melody-outline-none dark:melody-bg-gray-700 dark:melody-border-gray-600 dark:melody-placeholder-gray-400"
                           type="file"
                           id="fileUpload"
                           disabled={disabled}
                           accept={acceptedFileTypes ?? '.jpg,.jpeg,.png'}
                           onChange={onChange}
                           multiple={multiple} />
                </div>
            :
                <>
                    <div className="melody-flex melody-items-center melody-justify-center melody-w-full">
                        <label className="melody-cursor-pointer melody-flex melody-flex-col melody-rounded-lg melody-border-4 melody-border-dashed melody-w-full melody-h-60 melody-p-10 melody-group melody-text-center">
                            <div className="melody-h-full melody-w-full melody-text-center melody-flex melody-flex-col melody-items-center melody-justify-center melody-items-center">
                                <div className="melody-flex melody-flex-auto melody-max-h-48 melody-mx-auto">
                                    <Image className="melody-has-mask melody-h-36 melody-object-center"
                                           src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                           alt="dropzone for upload" />
                                </div>

                                <p className="melody-pointer-none melody-text-gray-500">
                                    <span className="melody-text-sm">Drag and drop</span> files here
                                    <br />
                                    or <span className="melody-text-blue-600 hover:melody-underline">select a file</span> from your computer
                                </p>
                            </div>
                            <input type="file"
                                   id="fileUpload"
                                   disabled={disabled}
                                   className="melody-file-upload melody-hidden"
                                   multiple={multiple} />
                        </label>
                    </div>

                    <p className="melody-text-sm melody-text-gray-300">
                        File Types: {acceptedFileTypes}
                    </p>
                </>
            }

        </div>
    )
}
