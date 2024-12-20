import { classNames } from "shared/lib/classNames/classNames";
import css from "./ArticleEditPage.module.scss";
import { memo } from "react";
import { Page } from "widgets/Page/Page";
import { useParams } from "react-router-dom";

interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
	const { className } = props;
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	return (
		<Page className={classNames(css.ArticleEditPage, {}, [className])}>
			{isEdit ? `Edit adrticle with id ${id}` : "Create new article"}
		</Page>
	);
});

export default ArticleEditPage;
