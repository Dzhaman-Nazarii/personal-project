import { classNames } from "shared/lib/classNames/classNames";
import css from "./Loader.module.scss";

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
