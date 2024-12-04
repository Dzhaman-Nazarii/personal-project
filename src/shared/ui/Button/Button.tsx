import { classNames } from "shared/lib/classNames/classNames";
import css from "./Button.module.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
	CLEAR = "clear",
	CLEAR_INVERTED = "clearInverted",
	OUTLINE = "outline",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props;

	const mods: Record<string, boolean | string> = {
		[css[theme]]: true,
		[css.square]: square,
		[css[size]]: true,
		[css.disabled]: disabled,
	};

	return (
		<button
			disabled={disabled}
			className={classNames(css.Button, mods, [className])}
			{...otherProps}>
			{children}
		</button>
	);
};
