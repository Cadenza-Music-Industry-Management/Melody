import {
    MelodySearchParamListEntry,
    MelodySearchParams,
    MelodySearchProps
} from "@/components/Melody/src/components/types";
import React, { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useGenerateForm from "@/components/hooks/useGenerateForm";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import { Label } from "@/components/Melody/src/components/Layouts/Label";

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
        onSearch,
        items,
        processingRequest
    } : MelodySearchProps
) {

    const [formValues, setFormValues] = useState<MelodySearchParams>(defaultFormValues)
    const [selectArtistModalOpen, setSelectArtistModalOpen] = useState(false)
    const [selectReleaseModalOpen, setSelectReleaseModalOpen] = useState(false)
    const [selectApparelModalOpen, setSelectApparelModalOpen] = useState(false)
    const [selectSourceModalOpen, setSelectSourceModalOpen] = useState(false)

    const { handleSubmit, reset, control, setValue, getValues, formState: { errors, isDirty } } = useForm({
        defaultValues: defaultFormValues
    })
    const { getFormTextAreaInput, getFormCheckboxRadioButton, getFormDropdown, getFormDatePicker, } = useGenerateForm(processingRequest, setValue, control)

    function onRefresh() {
        reset()
        handleSubmitFromForm(defaultFormValues)
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
                <Button label={"Select Releases"}
                        icon={{ icon: "melody-releases", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectReleaseModalOpen(!selectReleaseModalOpen)} />
            </div>
        }

        if (item.type === "artists") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Artists"} bold={true} />
                <Button label={"Select Artists"}
                        icon={{ icon: "melody-artist", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectArtistModalOpen(!selectArtistModalOpen)} />
            </div>
        }

        if (item.type === "apparel_items") {
            componentToDisplay = <div className={"melody-w-full"}>
                <Label label={"Search By Apparel Items"} bold={true} />
                <Button label={"Select Apparel Items"}
                        icon={{ icon: "melody-apparel-items", rightAligned: true }}
                        color={'secondary'}
                        variant={'outlined'}
                        size={"small"}
                        additionalClasses={"melody-w-full"}
                        onClick={() => setSelectApparelModalOpen(!selectApparelModalOpen)} />
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

        if (item.type === "date_range") {
            //TODO need to override onchange i think and send back update for start date and end date
            componentToDisplay = getFormDatePicker(item.filterProperty, errors[(item.filterProperty as FieldsToFilter) ?? ""]?.message?.toString(),{
                label: { label: `Search By Date`, bold: true },
                selectRange: true, //TODO this crashes app
                startDate: getValues("startDate"),
                endDate: getValues("endDate"),
            })
        }

        //TODO dirty disabled check below turned off for now as text inputs not being marked as dirty in form
        let searchButton
        if (item.type === "submit" || item.type === "submit_refresh") {
            searchButton = <div className={"melody-w-full melody-h-[35px]"}>
                <Button icon={{ icon: "search" }}
                        type={"submit"}
                        color={'secondary'}
                        variant={'solid'}
                        size={"small"}
                        loading={processingRequest}
                        // disabled={!isDirty}
                        additionalClasses={"melody-w-full"} />
            </div>

            if (item.type === "submit") componentToDisplay = searchButton
        }

        let refreshButton
        if (item.type === "refresh" || item.type === "submit_refresh") {
            refreshButton = <div className={"melody-w-full melody-h-[35px]"}>
                <Button icon={{ icon: "refresh" }}
                        color={'secondary'}
                        variant={'solid'}
                        size={"small"}
                        loading={processingRequest}
                        // disabled={!isDirty}
                        additionalClasses={"melody-w-full"}
                        onClick={onRefresh} />
            </div>

            if (item.type === "refresh") componentToDisplay = refreshButton
        }

        if (item.type === "submit_refresh") {
            componentToDisplay = <div className={"melody-w-full melody-h-[35px] melody-flex melody-gap-x-1"}>
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
            <div className={"melody-flex melody-flex-wrap melody-py-1 melody-py-4 melody-gap-x-5 melody-gap-y-1 melody-justify-center"}>
            {items.map(item => getSearchComponent(item))}
        </div>
        </form>
    }

    const searchUI = useMemo(() => {
        return getSearchUI()
    }, [formValues])

    return {
        filters: formValues,
        searchUI: searchUI
    }
}