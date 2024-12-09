import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/ui/Input";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import css from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profle";
import { Loader } from "widgets/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "shared/const/common";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
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
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
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

	const mods: Mods = {
		[css.editing]: !readonly,
	};

	return (
		<div className={classNames(css.ProfileCard, mods, [className])}>
			<div className={css.data}>
				{data?.avatar && (
					<div className={css.avatarWrapper}>
						<Avatar src={data?.avatar} />
					</div>
				)}
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
				<Input
					value={data?.username}
					placeholder={t("Your username")}
					className={css.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t("Enter link avatar")}
					className={css.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<Select
					label={t("Specify currency")}
					options={[
						{ value: Currency.USD, content: Currency.USD},
						{ value: Currency.EUR, content: Currency.EUR },
						{ value: Currency.UAH, content: Currency.UAH },
					]}
				/>
			</div>
		</div>
	);
};
