import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, label }) => (
	<div className={styles.formRow}>
		<label htmlFor={name}>{label}:</label>
		<Tag name={name} />
	</div>
);

Input.propType = {
	tag: PropTypes.string,
	name: PropTypes.string.isRequired,
};

Input.defaultProps = {
	tag: 'input',
};

export default Input;
