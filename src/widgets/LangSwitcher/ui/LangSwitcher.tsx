import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import css from "./LangSwitcher.module.scss";
import React, { memo } from "react";

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
	const { t } = useTranslation();

	const onToggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
	};

	return (
		<Button
			className={classNames(css.LangSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={onToggle}>
			{t(short ? "Short language" : "Language")}
		</Button>
	);
});
