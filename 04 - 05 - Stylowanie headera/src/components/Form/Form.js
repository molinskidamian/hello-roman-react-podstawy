import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './FormRadio';

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
		activeOption: types.twitter,
	};

	handleRadioChange = type => {
		this.setState({
			activeOption: type,
		});
	};

	render() {
		const { activeOption } = this.state;
		return (
			<div className={styles.wrapper}>
				<Title>Add new {description[this.state.activeOption]}</Title>
				<form autoComplete='off' className={styles.form} onSubmit={this.props.submitFn}>
					<div className={styles.radios}>
						<Radio
							id={types.twitter}
							checked={activeOption === types.twitter}
							onChangeFn={() => this.handleRadioChange(types.twitter)}
							label='Twitter'
						/>
						<Radio
							id={types.article}
							checked={activeOption === types.article}
							onChangeFn={() => this.handleRadioChange(types.article)}
							label='Article'
						/>
						<Radio
							id={types.note}
							checked={activeOption === types.note}
							onChangeFn={() => this.handleRadioChange(types.note)}
							label='Note'
						/>
					</div>

					<Input
						name='name'
						label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}
						maxLength={30}
					/>
					{activeOption !== types.note ? (
						<Input name='link' label={activeOption === types.article ? 'Link' : 'Twitter link'} />
					) : null}
					{activeOption === types.twitter ? <Input name='image' label='Image' /> : null}
					<Input tag='textarea' name='description' label='Description' />
					<Button>add new item</Button>
				</form>
			</div>
		);
	}
}

export default Form;
