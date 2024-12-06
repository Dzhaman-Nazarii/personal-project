import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ProfileCard.module.scss";

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation();

	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	return (
		<div className={classNames(css.ProfileCard, {}, [className])}>
			<div className={css.header}>
				<Text title={t("Profile")} />
				<Button className={css.editBtn} theme={ButtonTheme.OUTLINE}>{t("Edit")}</Button>
			</div>
			<div className={css.data}>
				<Input
					value={data?.firstname}
					placeholder={t("Your firstname")}
					className={css.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Your lastname")}
					className={css.input}
				/>
			</div>
		</div>
	);
};
