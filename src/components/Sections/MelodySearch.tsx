import {
    MelodySearchParamListEntry,
    MelodySearchParams,
    MelodySearchProps
} from "@/components/Melody/src/components/types";
import { useMemo, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import useGenerateForm from "@/components/hooks/useGenerateForm";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import { Label } from "@/components/Melody/src/components/Layouts/Label";
import { DatePicker } from "@/components/Melody/src/components/Inputs/DatePicker";
import { GenericContentModalTypes } from "@/constants/types";
import { GenericContentPageableModal } from "@/components/GenericContentPageableModal/GenericContentPageableModal";

type FieldsToFilter = "title" | "artists" | "genres" | "releases" | "tags" | "apparel" | "sources" | "startDate"
    | "endDate" | "email" | "username" | "writer" | "contentId" | "contentIdType" | "actions" | "fileType"

const defaultFormValues: MelodySearchParams = {
    title: null,
    artists: null,
    genres: null,
    releases: null,
    tags: null,
    apparel: null,
    sources: null,
    startDate: null,
    endDate: null,
    email: null,
    username: null,
    writer: null,
    contentId: null,
    contentIdType: { value: "RELEASE", label: "Release" },
    actions: null,
    fileType: null,
}

//TODO move to separate file
export function useMelodySearch(
    {
        items,
        processingRequest,
        onRefreshClicked
    } : MelodySearchProps
) {

    const [formValues, setFormValues] = useState<MelodySearchParams>(defaultFormValues)
    const [selectContentModalDetails, setSelectContentModalDetails] = useState<{
        open: boolean,
        title: string,
        filterProperty: FieldsToFilter,
        type: GenericContentModalTypes
    }>({ open: false, title: "Select Artists", type: "artist", filterProperty: "artists" })

    const { handleSubmit, reset, control, watch, setValue, getValues, formState: { errors, isDirty } } = useForm({
        defaultValues: defaultFormValues
    })
    const { getFormTextAreaInput, getFormCheckboxRadioButton, getFormDropdown, getFormDatePicker, } = useGenerateForm(processingRequest, setValue, control)

    function onRefresh() {
        reset()
        handleSubmitFromForm(defaultFormValues)
        if (onRefreshClicked) onRefreshClicked()
    }

    function handleSubmitFromForm(values: FieldValues) {
        setFormValues(values)
    }

    function getSearchComponent(item: MelodySearchParamListEntry) {
        let componentToDisplay;
        if (item.type === "text") {
            //TODO this is not being marked as dirty when edited
            componentToDisplay = getFormTextAreaInput(item.filterProperty, errors[(item.filterProperty as FieldsToFilter) ?? ""]?.message?.toString(), "text_input", {
                size: "small",
                label: item.title ? { label: `Search By ${item.title}`, bold: true } : undefined
            })
        }

        if (item.type === "releases") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Releases"} bold={true} />
                <Button label={watch(item.filterProperty as any) ? "Edit Selection" : "Select Releases"}
                        icon={{ icon: "melody-releases", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectContentModalDetails({
                            open: true,
                            title: "Select Releases",
                            type: "release",
                            filterProperty: item.filterProperty as any
                        })} />
            </div>
        }

        if (item.type === "artists") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Artists"} bold={true} />
                <Button label={watch(item.filterProperty as any) ? "Edit Selection" : "Select Artists"}
                        icon={{ icon: "melody-artist", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectContentModalDetails({
                            open: true,
                            title: "Select Artists",
                            type: "artist",
                            filterProperty: item.filterProperty as any
                        })} />
            </div>
        }

        if (item.type === "apparel_items") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Apparel Items"} bold={true} />
                <Button label={watch(item.filterProperty as any) ? "Edit Selection" : "Select Apparel Items"}
                        icon={{ icon: "melody-apparel-items", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectContentModalDetails({
                            open: true,
                            title: "Select Apparel Items",
                            type: "apparel",
                            filterProperty: item.filterProperty as any
                        })} />
            </div>
        }

        if (item.type === "accounting_sources") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Accounting Sources"} bold={true} />
                <Button label={watch(item.filterProperty as any) ? "Edit Selection" : "Select Accounting Sources"}
                        icon={{ icon: "melody-sources", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectContentModalDetails({
                            open: true,
                            title: "Select Accounting Sources",
                            type: "accounting_source",
                            filterProperty: item.filterProperty as any
                        })} />
            </div>
        }

        if (item.type === "dropdown") {
            componentToDisplay = getFormDropdown(item.filterProperty, errors[(item.filterProperty as FieldsToFilter) ?? ""]?.message?.toString(),{
                label: { label: `Search By ${item.title}`, bold: true },
                options: item.dropdownOptions ?? [],
                isMulti: true,
                isClearable: true
            })
        }

        //TODO cant use getFormDatePicker, doesnt work with range selection
        if (item.type === "date_range") {
            componentToDisplay = <Controller
                name={(item.filterProperty) as any}
                control={control}
                render={({ field }) => <DatePicker label={{ label: `Search By ${item.title}`, bold: true }}
                                                   selectRange={true}
                                                   buttonSize={"medium"}
                                                   onChange={dates => {
                                                       if (dates) {
                                                           setValue("startDate", (dates as Date[])[0])
                                                           setValue("endDate", (dates as Date[])[1])
                                                       }
                                                   }}
                                                   startDate={watch("startDate")}
                                                   endDate={watch("endDate")}
                                                   disabled={processingRequest} />} />
            {errors[(item.filterProperty as FieldsToFilter) ?? ""]?.message && <p className={"melody-text-sm melody-text-red-600 melody-p-0.5"}>{errors[(item.filterProperty as FieldsToFilter) ?? ""]?.message?.toString()}</p>}
        }

        //TODO dirty disabled check below turned off for now as text inputs not being marked as dirty in form
        let searchButton
        if (item.type === "submit" || item.type === "submit_refresh") {
            searchButton = <div className={"melody-w-full"}>
                <Button icon={{ icon: "search" }}
                        type={"submit"}
                        color={'secondary'}
                        variant={'solid'}
                        size={"medium"}
                        loading={processingRequest}
                        // disabled={!isDirty}
                        additionalClasses={"melody-w-full"} />
            </div>

            if (item.type === "submit") componentToDisplay = searchButton
        }

        let refreshButton
        if (item.type === "refresh" || item.type === "submit_refresh") {
            refreshButton = <div className={"melody-w-full"}>
                <Button icon={{ icon: "refresh" }}
                        color={'secondary'}
                        variant={'solid'}
                        size={"medium"}
                        loading={processingRequest}
                        // disabled={!isDirty}
                        additionalClasses={"melody-w-full"}
                        onClick={onRefresh} />
            </div>

            if (item.type === "refresh") componentToDisplay = refreshButton
        }

        if (item.type === "submit_refresh") {
            componentToDisplay = <div className={"melody-w-full melody-flex melody-gap-x-1"}>
                {searchButton}
                {refreshButton}
            </div>
        }

        return (
            <div className={`melody-flex melody-items-end ${item.colSize}`}>
                {componentToDisplay}
            </div>
        )
    }

    function getSearchUI() {

        if (items.length == 0) return null

        return <form onSubmit={handleSubmit(handleSubmitFromForm)}>

            {/*TODO do we need one global instance that we can set for dashboard state including the return function when opened?*/}
            {/* so that we don't re-render all search stuff everytime modal is opened and closed*/}
            <GenericContentPageableModal type={selectContentModalDetails.type}
                                         title={selectContentModalDetails.title}
                                         open={selectContentModalDetails.open}
                                         setOpen={() => setSelectContentModalDetails({ open: false, title: "Select Artists", type: "artist", filterProperty: "artists" })}
                                         selectedIds={watch(selectContentModalDetails.filterProperty as any) ? watch(selectContentModalDetails.filterProperty as any) : []}
                                         onSuccess={(newValues) => {
                                             setValue(selectContentModalDetails.filterProperty as any, newValues)
                                         }} />

            <div className={"melody-flex melody-flex-wrap melody-py-1 melody-py-4 melody-gap-x-5 melody-gap-y-1 melody-justify-center"}>
                {items.map(item => getSearchComponent(item))}
            </div>
        </form>
    }

    const contentModalOpen = selectContentModalDetails.open
    const searchUI = useMemo(() => {
        return getSearchUI()
    }, [onRefresh, contentModalOpen, formValues])

    return {
        filters: formValues,
        searchUI: searchUI,
        resetFilters: onRefresh
    }
}