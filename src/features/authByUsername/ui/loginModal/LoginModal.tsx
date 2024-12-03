import { classNames } from "shared/lib/classNames/classNames";
import css from "./LoginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../loginForm/LoginForm";

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			lazy
			className={classNames(css.LoginModal, {}, [className])}>
			<LoginForm />
		</Modal>
	);
};
