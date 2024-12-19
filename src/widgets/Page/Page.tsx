import { classNames } from "shared/lib/classNames/classNames";
import css from "./Page.module.scss";
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getSaveScrollByPath, saveScrollActions } from "features/scrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottlle } from "shared/lib/hooks/useThrottlle/useThrottlle";

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
	const { className, children, onScrollEnd } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) =>
		getSaveScrollByPath(state, pathname)
	);

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const onScrollHandler = useThrottlle((evt: UIEvent<HTMLDivElement>) => {
		dispatch(
			saveScrollActions.setScrollPosition({
				position: evt.currentTarget.scrollTop,
				path: pathname,
			})
		);
	}, 500);

	return (
		<section
			ref={wrapperRef}
			onScroll={onScrollHandler}
			className={classNames(css.Page, {}, [className])}>
			{children}
			{onScrollEnd ? (
				<div
					className={css.trigger}
					ref={triggerRef}></div>
			) : null}
		</section>
	);
});
