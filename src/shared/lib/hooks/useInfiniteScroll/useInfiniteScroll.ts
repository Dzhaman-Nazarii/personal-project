import { MutableRefObject, useEffect } from "react";

export interface useInfinityScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll(props: useInfinityScrollOptions) {
	const { callback, triggerRef, wrapperRef } = props;
	let observer: IntersectionObserver | null = null;

	useEffect(() => {
		const wrapperelement = wrapperRef.current;
		const triggerElement = triggerRef.current;

		if (callback) {
			const options = {
				root: wrapperelement,
				rootMargin: "0px",
				threshold: 1.0,
			};

			observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);
			observer.observe(triggerElement);
		}

		return () => {
			if (observer && triggerElement) {
				observer.unobserve(triggerElement);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
}
