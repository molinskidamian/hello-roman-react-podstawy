import React from 'react';
import styles from './FormRadio.module.scss';

const FormRadio = ({ id, checked, onChangeFn, label }) => (
	<label htmlFor={id}>
		<input type='radio' id={id} checked={checked} onChange={onChangeFn} />
		{label}
	</label>
);

export default FormRadio;
