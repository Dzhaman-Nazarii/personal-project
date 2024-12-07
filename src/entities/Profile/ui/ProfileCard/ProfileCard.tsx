import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profle";
import { Loader } from "widgets/Loader";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname: (value?: string) => void;
	onChangeLastname: (value?: string) => void;
	onChangeAge: (value?: string) => void;
	onChangeCity: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity
	} = props;
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div
				className={classNames(css.ProfileCard, {}, [
					className,
					css.loading,
				])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(css.ProfileCard, {}, [
					className,
					css.error,
				])}>
				<Text
					theme={TextTheme.ERROR}
					title={t("Something went wrong with loading profile")}
					text={t("Try to reload page")}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(css.ProfileCard, {}, [className])}>
			<Input
				value={data?.firstname}
				placeholder={t("Your firstname")}
				className={css.input}
				onChange={onChangeFirstname}
				readonly={readonly}
			/>
			<Input
				value={data?.lastname}
				placeholder={t("Your lastname")}
				className={css.input}
				onChange={onChangeLastname}
				readonly={readonly}
			/>
			<Input
				value={data?.age}
				placeholder={t("Your age")}
				className={css.input}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<Input
				value={data?.city}
				placeholder={t("Your city")}
				className={css.input}
				onChange={onChangeCity}
				readonly={readonly}
			/>
		</div>
	);
};
