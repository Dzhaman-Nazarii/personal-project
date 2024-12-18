import { useCallback, useRef } from "react";

export function useThrottlle<T extends (...args: any[]) => void>(
	callback: T,
	delay: number
) {
	const throttleRef = useRef(false);

	return useCallback(
		(...args: Parameters<T>) => {
			if (!throttleRef.current) {
				callback(...args);
				throttleRef.current = true;
				setTimeout(() => {
					throttleRef.current = false;
				}, delay);
			}
		},
		[callback, delay]
	);
}
