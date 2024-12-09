import React, { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./Avatar.module.scss";

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {

	const mods: Mods = {};

	const styles = useMemo<CSSProperties>(()=>{
		return {
			width: size || 100,
			height: size || 100,
		}
	},[size])

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(css.Avatar, mods, [className])}
		/>
	);
};
