import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<div>
			<BugButton />
			{t("Main page")}
			<Counter/>
		</div>
	);
};

export default MainPage;
