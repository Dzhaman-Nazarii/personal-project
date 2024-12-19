import React from "react";
import { ArticleView } from "entities/Article";
import ListIcon from "shared/assets/icons/list.svg";
import TiledIcon from "shared/assets/icons//tiled.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{ view: ArticleView.SMALL, icon: TiledIcon },
	{ view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
	const { className, view, onViewClick } = props;

	const onClickView = (newView: ArticleView) => {
		return () => {
			onViewClick?.(newView);
		};
	};

	return (
		<div className={classNames(css.ArticleViewSelector, {}, [className])}>
			{viewTypes.map((viewType, index) => (
				<Button
					key={index}
					theme={ButtonTheme.CLEAR}
					onClick={onClickView(viewType.view)}>
					<Icon
						Svg={viewType.icon}
						className={classNames("", {
							[css.notSelected]: viewType.view !== view,
						})}
					/>
				</Button>
			))}
		</div>
	);
};
