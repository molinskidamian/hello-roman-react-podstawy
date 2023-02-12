import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';

const types = {
	twitter: 'twitter',
	article: 'article',
	note: 'note',
};

const description = {
	twitter: 'twitter',
	article: 'article',
	note: 'note',
};

class Form extends React.Component {
	state = {
		activeOptions: types.twitter,
	};

	handleRadioCHange = type => {
		this.setState({
			activeOptions: type,
		});
	};

	render() {
		return (
			<div className={styles.wrapper}>
				<Title>Add new {description[this.state.activeOptions]}</Title>
				<form autoComplete='off' className={styles.form} onSubmit={this.props.submitFn}>
					<input
						type='radio'
						id={types.twitter}
						checked={this.state.activeOptions === types.twitter}
						onChange={() => this.handleRadioCHange(types.twitter)}
					/>
					<label htmlFor={types.twitter}>Twitter</label>
					<input
						type='radio'
						id={types.article}
						checked={this.state.activeOptions === types.article}
						onChange={() => this.handleRadioCHange(types.article)}
					/>
					<label htmlFor={types.article}>Article</label>
					<input
						type='radio'
						id={types.note}
						checked={this.state.activeOptions === types.note}
						onChange={() => this.handleRadioCHange(types.note)}
					/>
					<label htmlFor={types.note}>Note</label>
					<Input name='name' label='Name' maxLength={30} />
					<Input name='link' label='Twitter link' />
					<Input name='image' label='Image' />
					<Input tag='textarea' name='description' label='Description' />
					<Button>add new item</Button>
				</form>
			</div>
		);
	}
}

export default Form;
