import { MutableRefObject, useEffect, useRef } from "react";

export function useClickOutside(ref: any, onClickOutside: () => void) {
    useEffect(() => {

        function handleClickOutside(event: { target: any; }) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [ref, onClickOutside])
}

//TODO not used right now
export function useTimeout(callback: () => void, delay: number) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const timer = setTimeout(() => callbackRef.current(), delay);

            return () => clearTimeout(timer);
        }
    }, [delay]);
};