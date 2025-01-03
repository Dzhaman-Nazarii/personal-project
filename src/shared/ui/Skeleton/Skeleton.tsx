import React, { CSSProperties } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	width?: string | number;
	height?: string | number;
	border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
	const { className, width, height, border } = props;
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	};
	return (
		<div
			style={styles}
			className={classNames(css.Skeleton, {}, [className])}>
		</div>
	);
};
