import React, { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../loginForm/LoginForm.async";
import css from "./LoginModal.module.scss";
import { Loader } from "widgets/Loader";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Suspense fallback={<Loader/>}>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				lazy
				className={classNames(css.LoginModal, {}, [className])}>
				<LoginFormAsync onSuccess={onClose} />
			</Modal>
		</Suspense>
	);
};
