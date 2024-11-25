import { classNames } from "shared/lib/classNames/classNames";
import css from "./PageError.module.scss";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(css.PageError, {}, [className])}>
			<p>{t("Page error")}</p>
			<button onClick={reloadPage}>{t("Refresh page")}</button>
		</div>
	);
};
