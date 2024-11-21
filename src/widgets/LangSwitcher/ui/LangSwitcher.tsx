import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import css from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t } = useTranslation();

	const onToggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
	};

	return (
		<Button
			className={classNames(css.LangSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={onToggle}>
			{t("Language")}
		</Button>
	);
};
