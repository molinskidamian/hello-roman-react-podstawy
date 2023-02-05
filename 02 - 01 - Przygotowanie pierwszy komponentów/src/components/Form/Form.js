import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = ({ submitFn }) => (
	<form className={styles.form} onSubmit={submitFn}>
		<Input name='nazwa' label='Nazwa użytkownika' />
		<Input name='image' label='Avatar' />
		<Input name='link' label='Link do profilu' />
		<Input tag='textarea' name='description' label='Opis' />
		<Button>Add new user</Button>
	</form>
);

export default Form;
