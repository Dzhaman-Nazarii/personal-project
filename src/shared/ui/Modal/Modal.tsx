import React, {
	ReactNode,
	MouseEvent,
	useState,
	useRef,
	useEffect,
	useCallback,
} from "react";
import { Portal } from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Modal.module.scss";

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props;

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const {theme} = useTheme();

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onContentClick = (evt: MouseEvent) => {
		evt.stopPropagation();
	};

	const onKeyDown = useCallback(
		(evt: KeyboardEvent) => {
			if (evt.key === "Escape") {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", onKeyDown);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[css.opened]: isOpen,
		[css.isClosing]: isClosing,
	};

	return (
		<Portal>
			<div className={classNames(css.Modal, mods, [className, theme, "app_modal"])}>
				<div
					className={css.overlay}
					onClick={closeHandler}>
					<div
						className={css.content}
						onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
