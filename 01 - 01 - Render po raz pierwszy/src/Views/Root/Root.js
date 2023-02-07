import React from 'react';
import styles from './Root.module.scss';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Navigation />
				<h1>Hello World!</h1>
				<Routes>
					<Route path='/' element={<TwittersView />} />
					<Route path='/articles' element={<ArticlesView />} />
					<Route path='/notes' element={<NotesView />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default Root;
