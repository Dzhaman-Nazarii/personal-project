import { classNames } from "shared/lib/classNames/classNames";
import css from "./Button.module.scss";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
	CLEAR = "clear",
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
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean | string> = {
		[css[theme]]: true,
		[css.square]: square,
		[css[size]]: true,
	};

	return (
		<button
			className={classNames(css.Button, mods, [className])}
			{...otherProps}>
			{children}
		</button>
	);
};
