import { useEffect, useRef } from "react";

export function useCloseOnClickAway(
    onClickAway: () => void
) {

    //TODO doesnt seem to work at all right now

    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        document.addEventListener('click', clickOutsideRef, false)
        return () => document.removeEventListener('click', clickOutsideRef, false)
    }, [])

    //TODO this is being fired for every click, need to fix that
    function clickOutsideRef(event: Event) {
        if (ref.current && !ref.current.contains((event.target as Node))) {
            onClickAway()
        }
    }

    return ref
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