import { classNames } from "shared/lib/classNames/classNames";
import css from "./Loader.module.scss";
import React from "react";

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(css.ldsEllipsis, {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
