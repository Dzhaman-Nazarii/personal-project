import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import css from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const readonly = useSelector(getProfileReadonly);

	const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.canCancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
		dispatch(profileActions.setReadonly(true));
        dispatch(updateProfileData());
    }, [dispatch]);

	return (
		<div className={classNames(css.ProfilePageHeader, {}, [className])}>
			<Text title={t("Profile")} />
			{readonly ? (
				<Button
					className={css.editBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEdit}
					>
					{t("Edit")}
				</Button>
			) : (
				<>
					<Button
						className={css.editBtn}
						theme={ButtonTheme.OUTLINE_RED}
						onClick={onCancelEdit}
						>
						{t("Cancel")}
					</Button>
					<Button
						className={css.saveBtn}
						theme={ButtonTheme.OUTLINE}
						onClick={onSave}
						>
						{t("Save")}
					</Button>
				</>
			)}
		</div>
	);
};
