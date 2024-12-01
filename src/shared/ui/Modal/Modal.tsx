import { classNames } from 'shared/lib/classNames/classNames';
import css from './Modal.module.scss';
import React, { ReactNode } from 'react';

interface ModalProps {
  className?: string;
  children?: ReactNode
}

export const Modal = (props: ModalProps) => {

	const {className, children} = props;

  return (
	<div className={classNames(css.Modal, {}, [className])}>
	  <div className={css.overlay}>
		<div className={css.content}>
			{children}
		</div>
	  </div>
	</div>
  );
};