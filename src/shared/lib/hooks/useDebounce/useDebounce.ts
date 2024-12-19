import { MutableRefObject, useCallback, useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
	callback: T,
	delay: number
) {
	const timer = useRef() as MutableRefObject<any>;

	return useCallback(
		(...args: Parameters<T>) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
}
