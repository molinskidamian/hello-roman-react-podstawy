import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';
import Button from '../Button/Button';

const Modal = ({ closeModalFn }) => (
	<div className={styles.wrapper}>
		<Button onClick={closeModalFn}>Close</Button>
		<Form />
	</div>
);

export default Modal;
