import { Select, SelectOption } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import { ArticleSortField } from "../../model/types/articles";
import { SortOrder } from "shared/types";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
	const { className, sort, order, onChangeOrder, onChangeSort } = props;
	const { t } = useTranslation();

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
		() => [
			{
				value: "asc",
				content: t("growth"),
			},
			{
				value: "desc",
				content: t("decrease"),
			},
		],
		[t]
	);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t("date"),
			},
			{
				value: ArticleSortField.TITLE,
				content: t("title"),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t("views"),
			},
		],
		[t]
	);

	return (
		<div className={classNames(css.ArticleSortSelector, {}, [className])}>
			<Select
				options={sortFieldOptions}
				label={t("Sort BY")}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				options={orderOptions}
				label={t("by")}
				value={order}
				onChange={onChangeOrder}
				className={css.order}
			/>
		</div>
	);
};
