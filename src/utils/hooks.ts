import { useEffect, useRef } from "react";

export function useCloseOnClickAway(
    onClickAway: () => void
) {

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