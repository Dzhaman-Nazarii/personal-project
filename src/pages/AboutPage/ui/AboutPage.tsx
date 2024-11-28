import React, { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutPage: FC = () => {

	const {t} = useTranslation()

	return <div>{t("About website")}</div>;
};

export default AboutPage;
