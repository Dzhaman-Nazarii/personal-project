import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { ArticleType } from "entities/Article/model/types/articles";

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
	const { className, value, onChangeType } = props;
	const { t } = useTranslation();

	const typeTabs = useMemo<TabItem[]>(
		() => [
			{
				value: ArticleType.IT,
				content: t("IT"),
			},
			{
				value: ArticleType.ECONOMY,
				content: t("Economy"),
			},
			{
				value: ArticleType.NEWS,
				content: t("News"),
			},
			{
				value: ArticleType.PROGRAMMING,
				content: t("Programming"),
			},
			{
				value: ArticleType.SCIENSE,
				content: t("Sciense"),
			},
			{
				value: ArticleType.ALL,
				content: t("All"),
			},
		],
		[t]
	);

	const onTabClick = useCallback(
		(newType: TabItem) => {
			onChangeType(newType.value as ArticleType);
		},
		[onChangeType]
	);

	return (
		<Tabs
			tabs={typeTabs}
			value={value}
			onTabClick={onTabClick}
			className={classNames("", {}, [className])}
		/>
	);
};
