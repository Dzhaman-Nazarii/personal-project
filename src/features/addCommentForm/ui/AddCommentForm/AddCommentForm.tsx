import { classNames } from "shared/lib/classNames/classNames";
import css from "./AddCommentForm.module.scss";
import { Input } from "shared/ui/Input/ui/Input";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
	getAddCommentFormError,
	getAddCommentFormText,
} from "../../model/selectors/AddCommentFormSelectors";
import React, { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
	addCommentFormActions,
	addCommentFormReducer,
} from "../../model/slices/AddCommentFormSlice";
import {
	DynamicModuleLoader,
	ReducersList,
} from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const text = useSelector(getAddCommentFormText) || "";

	const reducers: ReducersList = {
		addCommentForm: addCommentFormReducer,
	};

	const onCommentTextChange = useCallback(
		(value: string) => {
			dispatch(addCommentFormActions.setText(value));
		},
		[dispatch]
	);

	const onSendHandler = useCallback(() => {
		onSendComment(text.trim());
		onCommentTextChange("");
	}, [onSendComment, onCommentTextChange, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(css.AddCommentForm, {}, [className])}>
				<Input
					className={css.input}
					value={text}
					onChange={onCommentTextChange}
					placeholder={t("Enter comment text")}
				/>
				<Button onClick={onSendHandler}>{t("Send")}</Button>
			</div>
		</DynamicModuleLoader>
	);
};

export default AddCommentForm;
