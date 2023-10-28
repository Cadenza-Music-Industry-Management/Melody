import { Label } from "@/components/Melody/src/components/Layouts/Label";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Spinner } from "@/components/Melody/src/components/Layouts/Spinner";

export function Overlay(props: {
    label: string | undefined,
    subLabel: string | undefined,
    open: boolean
}) {

    const {
        label,
        subLabel,
        open
    } = props

    return (
        <Transition.Root show={open} as={Fragment}>
            <div className={`melody-relative melody-z-[1000]`}>
                {/*Dark background of overlay*/}
                <Transition.Child
                    as={Fragment}
                    enter="melody-ease-out melody-duration-300"
                    enterFrom="melody-opacity-0"
                    enterTo="melody-opacity-100"
                    leave="melody-ease-in melody-duration-200"
                    leaveFrom="melody-opacity-100"
                    leaveTo="melody-opacity-0">
                    <div className="melody-fixed melody-inset-0 melody-bg-gray-800 melody-bg-opacity-90 melody-transition-opacity" />
                </Transition.Child>

                <div className={"melody-absolute melody-left-0 melody-right-0 melody-flex melody-flex-col melody-justify-center melody-items-center melody-z-10 melody-h-screen"}>
                    <Label label={label ?? ""} bold={true} size={"xlarge"} color={"white"} />

                    <div className={"melody-p-5"}>
                        <Label label={subLabel ?? ""} bold={true} size={"large"} color={"white"} />
                    </div>

                    <Spinner size={"large"} />
                </div>
            </div>
        </Transition.Root>
    )
}