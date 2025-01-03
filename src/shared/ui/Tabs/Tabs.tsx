import React, { ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./Tabs.module.scss";

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
	const { className, tabs, value, onTabClick } = props;

	const clickHandle = useCallback(
		(tab: TabItem) => {
			return () => {
				onTabClick(tab);
			};
		},
		[onTabClick]
	);

	return (
		<div className={classNames(css.Tabs, {}, [className])}>
			{tabs.map((tab) => (
				<Card
					theme={
						tab.value === value
							? CardTheme.NORMAL
							: CardTheme.OUTLINED
					}
					className={css.tab}
					key={tab.value}
					onClick={clickHandle(tab)}>
					{tab.content}
				</Card>
			))}
		</div>
	);
};
