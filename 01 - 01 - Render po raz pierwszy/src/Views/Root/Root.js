import React from 'react';
import styles from './Root.module.scss';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ListWrapper from '../../components/ListWrapper/ListWrapper';

const initialStateItems = [
	{
		name: 'Damian Moliński',
		image: 'https://avatars.githubusercontent.com/u/8742357?v=4',
		link: 'https://github.com/molinskidamian',
		description: 'Optimist, father, miner and passionate web developer.',
	},
];

class Root extends React.Component {
	state = {
		items: [...initialStateItems],
	};

	render() {
		return (
			<BrowserRouter>
				<Header />
				<h1>Hello World!</h1>
				<Routes>
					<Route path='/' element={<TwittersView />} />
					<Route path='/articles' element={<ArticlesView />} />
					<Route path='/notes' element={<NotesView />} />
				</Routes>
				<ListWrapper items={this.state.items} />
			</BrowserRouter>
		);
	}
}

export default Root;
