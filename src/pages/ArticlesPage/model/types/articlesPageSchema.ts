import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import {
	ArticleSortField,
	ArticleType,
} from "entities/Article/model/types/articles";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	page: number;
	limit: number;
	hasMore: boolean;
	view: ArticleView;
	order: SortOrder;
	sort: ArticleSortField;
	search: string;
	type: ArticleType;
	_inited: boolean;
}
