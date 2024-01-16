'use client'

import "./RichTextEditor.scss"
import { EditorContent, useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import CharacterCount from '@tiptap/extension-character-count'
import { Badge } from "../Layouts/Badge";
import { ReactNode, useCallback, useEffect } from "react";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { DropdownOption, RichTextEditorProps } from "../../components/types";
import { Level } from "@tiptap/extension-heading";
import { ColorPicker } from "./ColorPicker";
import { Label } from "../Layouts/Label";
import { AbsoluteTooltip } from "../Layouts/AbsoluteTooltip";
import { testLink, testMailTo } from "@/utils/functions";
import { toast } from "react-toastify";

const RichTextEditor = (props: RichTextEditorProps) => {

    const {
        label,
        value,
        placeholder,
        readOnly = false,
        disabled = false,
        toolbar = true,
        className,
        onBlur,
        characterLimit = 1000
    } = props

    const editor = useEditor({
        content: value,
        extensions: [
            Underline,
            TextStyle,
            Link,
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure(({ types: [ListItem.name] }) as any), //TODO cast to any as error with TypeScript despite example showing this is how it is setup
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false, // TODO (Note from TipTap example) : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            CharacterCount.configure({
                limit: characterLimit,
                mode: 'nodeSize',
            }),
        ],
        editable: !readOnly && !disabled
    });

    useEffect(() => {
        editor?.commands.setContent(value ?? "")
    }, [value])

    function sendEditorContents() {
        if (onBlur) {
            onBlur(editor?.getHTML() ?? "");
        }
    }

    return (
       <div className={"melody-w-full"}>
           {label && <Label {...label} />}

           <div className={`melody-border melody-border-gray-200 melody-rounded ${className ?? ''}`}>
               <MenuBar editor={editor} toolbar={toolbar} disabled={disabled} />

               <div className={`${readOnly ? 'melody-bg-gray-100' : 'melody-bg-white'} melody-border-b melody-border-b-gray-200 melody-p-4 ${disabled ? 'melody-opacity-50 melody-pointer-events-none' : ''}`}
                    onBlur={sendEditorContents}>
                   <EditorContent editor={editor} placeholder={placeholder} />
               </div>

               <div className={"melody-p-1"}>
                  <AbsoluteTooltip message={"This character total is calculated by the rendered HTML."}>
                      <Badge text={`${editor?.storage.characterCount.characters()} / ${characterLimit}`}
                             variant={editor?.storage.characterCount.characters() === characterLimit ? "alert" : editor?.storage.characterCount.characters() > (characterLimit * 0.75) ? "caution" : "success"} />
                  </AbsoluteTooltip>
               </div>
           </div>
       </div>
    );
};

export default RichTextEditor;

function MenuBar(props: {
    editor: Editor | null,
    toolbar: boolean,
    disabled: boolean
})  {

    const { editor, toolbar, disabled } = props

    function changeTextSizing(value: number) {
        if (value === 0) {
            editor?.chain().focus().setParagraph().run()
        } else {
            editor?.chain().focus().toggleHeading({ level: value as Level }).run()
        }
    }

    //TODO will need function to get currently selected option
    //editor.isActive('heading', { level: 1 })
    function getActiveDropdownValue() {
        if (editor?.isActive('paragraph')) {
            return { label: "Paragraph", value: "0" }
        } else {
            //TODO how to do for each heading?
        }
    }

    function wrapTooltipComponent(message: string, component: ReactNode) {
        return <AbsoluteTooltip message={message} direction={"top"} widthClass={"melody-text-center melody-w-28"}>
            {component}
        </AbsoluteTooltip>
    }

    const setLink = useCallback(() => {
        const previousUrl = editor?.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor?.chain().focus().extendMarkRange('link').unsetLink()
                .run()
            return
        }

        if (!testLink(url) && !testMailTo(url)) {
            toast.error("Invalid link format")
            return
        }

        // update link
        editor?.chain().focus().extendMarkRange('link').setLink({
            href: url,
            target: '_blank',
            rel: 'noopener noreferrer'
        }).run()
    }, [editor])

    if (!editor || !toolbar) {
        return null
    }

    return (
        <div className="melody-border-b melody-border-b-gray-200 melody-p-1">

            <div className="melody-flex melody-space-x-2 melody-space-y-2 melody-flex-wrap">
                <div className={"melody-flex melody-items-end"}>
                    {wrapTooltipComponent("Text Sizing", <Dropdown size={"small"}
                                                                   isDisabled={disabled}
                                                                   onChange={value => changeTextSizing(Number((value as DropdownOption).value))}
                                                                   options={[
                                                                       { label: "Paragraph", value: "0" },
                                                                       { label: "Header 1", value: "1" },
                                                                       { label: "Header 2", value: "2" },
                                                                       { label: "Header 3", value: "3" },
                                                                       { label: "Header 4", value: "4" },
                                                                       { label: "Header 5", value: "5" },
                                                                       { label: "Header 6", value: "6" }
                                                                   ]}  />)}
                </div>

                {wrapTooltipComponent("Bold", <Button customLabel={{ label: "B", bold: true, color: editor.isActive('bold') ? "white" : "black" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={editor.isActive('bold') ? "primary": "white"}
                                                      onClick={() => editor.chain().focus().toggleBold().run()}
                                                      disabled={!editor.can().chain().focus().toggleBold().run() || disabled} />)}

                {wrapTooltipComponent("Italic", <Button customLabel={{ label: "I", bold: true, additionalClasses: "melody-italic", color: editor.isActive('italic') ? "white" : "black" }}
                                                        size={"small"}
                                                        additionalClasses={"melody-h-full"}
                                                        color={editor.isActive('italic') ? "primary": "white"}
                                                        onClick={() => editor.chain().focus().toggleItalic().run()}
                                                        disabled={!editor.can().chain().focus().toggleItalic().run() || disabled} />)}

                {wrapTooltipComponent("Strikethrough", <Button customLabel={{ label: "S", additionalClasses: "melody-line-through", bold: true, color: editor.isActive('strike') ? "white" : "black" }}
                                                               size={"small"}
                                                               additionalClasses={"melody-h-full"}
                                                               color={editor.isActive('strike') ? "primary": "white"}
                                                               onClick={() => editor.chain().focus().toggleStrike().run()}
                                                               disabled={!editor.can().chain().focus().toggleStrike().run() || disabled} />)}

                {wrapTooltipComponent("Underline", <Button customLabel={{ label: "U", bold: true, additionalClasses: "melody-underline melody-underline-offset-2", color: editor.isActive('underline') ? "white" : "black" }}
                                                           size={"small"}
                                                           additionalClasses={"melody-h-full"}
                                                           color={editor.isActive('underline') ? "primary": "white"}
                                                           onClick={() => editor.chain().focus().toggleUnderline().run()}
                                                           disabled={!editor.can().chain().focus().toggleUnderline().run() || disabled} />)}

                {wrapTooltipComponent("Link", <Button customLabel={{ label: "L", bold: true, color: editor.isActive('link') ? "white" : "black" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={editor.isActive('link') ? "primary": "white"}
                                                      onClick={setLink}
                                                      disabled={disabled} />)}

                {/*TODO these next two indent correctly but don't display list styling like bullet or number*/}
                {wrapTooltipComponent("Bullet List", <Button icon={{ icon: "bulletList", additionalClasses: editor.isActive('bulletList') ? "melody-text-white" : "melody-text-black-0" }}
                                                             size={"small"}
                                                             additionalClasses={"melody-h-full"}
                                                             disabled={disabled}
                                                             color={editor.isActive('bulletList') ? "primary": "white"}
                                                             onClick={() => editor.chain().focus().toggleBulletList().run()} />)}

                {wrapTooltipComponent("Number List", <Button icon={{ icon: "numberList", additionalClasses: editor.isActive('orderedList') ? "melody-text-white" : "melody-text-black-0" }}
                                                             size={"small"}
                                                             additionalClasses={"melody-h-full"}
                                                             disabled={disabled}
                                                             color={editor.isActive('orderedList') ? "primary": "white"}
                                                             onClick={() => editor.chain().focus().toggleOrderedList().run()} />)}

                {wrapTooltipComponent("Blockquote", <Button icon={{ icon: "quoteLeft", additionalClasses: editor.isActive('blockquote') ? "melody-text-white" : "melody-text-black-0" }}
                                                            size={"small"}
                                                            additionalClasses={"melody-h-full"}
                                                            disabled={disabled}
                                                            color={editor.isActive('blockquote') ? "primary": "white"}
                                                            onClick={() => editor.chain().focus().toggleBlockquote().run()} />)}

                {wrapTooltipComponent("Code", <Button icon={{ icon: "code", additionalClasses: editor.isActive('code') ? "melody-text-white" : "melody-text-black-0" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={editor.isActive('code') ? "primary": "white"}
                                                      onClick={() => editor.chain().focus().toggleCode().run()}
                                                      disabled={!editor.can().chain().focus().toggleCode().run() || disabled} />)}

                {wrapTooltipComponent("Block Code", <Button icon={{ icon: "blockCode", additionalClasses: editor.isActive('codeBlock') ? "melody-text-white" : "melody-text-black-0" }}
                                                            size={"small"}
                                                            additionalClasses={"melody-h-full"}
                                                            color={editor.isActive('codeBlock') ? "primary": "white"}
                                                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                                                            disabled={!editor.can().chain().focus().toggleCodeBlock().run() || disabled} />)}

                {wrapTooltipComponent("Line", <Button customLabel={{ label: "━", bold: true, color: "black" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={"white"}
                                                      disabled={disabled}
                                                      onClick={() => editor.chain().focus().setHorizontalRule().run()} />)}

                {wrapTooltipComponent("Text Color", <ColorPicker value={editor.getAttributes('textStyle').color ?? "#000000"}
                                                                 buttonColor={"white"}
                                                                 disabled={disabled}
                                                                 onChange={color => editor.chain().focus().setColor(color).run()} />)}

                {wrapTooltipComponent("Undo", <Button icon={{ icon: "rotateArrowLeft" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={"white"}
                                                      onClick={() => editor.chain().focus().undo().run()}
                                                      disabled={!editor.can().chain().focus().undo().run()|| disabled} />)}

                {wrapTooltipComponent("Redo", <Button icon={{ icon: "rotateArrowRight" }}
                                                      size={"small"}
                                                      additionalClasses={"melody-h-full"}
                                                      color={"white"}
                                                      onClick={() => editor.chain().focus().redo().run()}
                                                      disabled={!editor.can().chain().focus().redo().run()|| disabled} />)}
            </div>

        </div>
    )
}