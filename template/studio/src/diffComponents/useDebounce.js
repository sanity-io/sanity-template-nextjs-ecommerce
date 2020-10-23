import { useRef, useCallback } from 'react';

export function useDebounce(callback, delay, deps) {
    const timeoutRef = useRef(null);

    const $callback = useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => callback(...args), delay);
    }, [delay, ...deps]);

    const cancel = useCallback(() => clearTimeout(timeoutRef.current), []);
    return [$callback, cancel];
}
