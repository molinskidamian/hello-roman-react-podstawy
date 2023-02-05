import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const users = [
	{
		name: 'Damian Moliński',
		image: 'https://avatars.githubusercontent.com/u/8742357?v=4',
		link: 'https://github.com/molinskidamian',
		description: 'Optimist, father, miner and passionate web developer.',
	},
	{
		name: 'Katarzyna Weronika Molińska',
		image:
			'https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/28055753_1743506402373370_9159461752895342363_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=vWab7vZFy8AAX8yaL68&_nc_ht=scontent-waw1-1.xx&oh=00_AfDbxTFdGcHpd-rh4wKSOpvRrXypaYzg14XlkcA8K7vfug&oe=6407080D',
		link: 'https://www.facebook.com/molinska.kasia',
		description:
			'Pracuje w: Vita-Med Klinika Okulistyczn. Poprzedni pracodawca: Centrum Badań Jakości',
	},
];

class App extends React.Component {
	state = {
		items: [...users],
	};

	addItem = e => {
		e.preventDefault();

		const newUser = {
			name: e.target[0].value,
			image: e.target[1].value,
			link: e.target[2].value,
			description: e.target[3].value,
		};

		this.setState(prevState => ({
			items: [...prevState.items, newUser],
		}));

		e.target.reset();
	};

	render() {
		return (
			<div>
				<ListWrapper items={this.state.items} />
				<Form submitFn={this.addItem} />
			</div>
		);
	}
}

export default App;
