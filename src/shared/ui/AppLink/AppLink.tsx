import React, { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
	const {
		className,
		to,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(css.AppLink, {}, [className, css[theme]])}
			{...otherProps}>
			{children}
		</Link>
	);
});
