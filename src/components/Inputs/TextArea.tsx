import "./TextInput.css"
import {TextInputProps} from "../types";
import {Label} from "../Layouts/Label";

export const TextArea = (props: TextInputProps) => {
    const {
        value,
        label,
        placeholder,
        size = "medium",
        disabled = false,
        onChange,
        resize = true,
        rows = 4
    } = props

    return (
        <div className={"melody-w-full"}>
            {label && <Label {...{...label, htmlFor: "textArea"}} />}
            <textarea placeholder={placeholder}
                      value={value}
                      rows={rows}
                      disabled={disabled}
                      onChange={(event => {
                          if (onChange) onChange(event.target.value)
                      })}
                      //id={`textArea`} //TODO need unique id
                      className={`melody-text-input ${size} ${!resize ? "melody-resize-none" : ""}`} />
        </div>
    );
};