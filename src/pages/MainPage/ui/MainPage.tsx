import { BugButton } from "app/providers/ErrorBoundary";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
	const { t } = useTranslation();

	return (
		<div>
			<BugButton />
			{t("Main page")}
		</div>
	);
};

export default MainPage;
