import React from 'react';
import AppContext from '../../context';
import './index.css';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
	state = {
		items: {
			twitters: [],
			articles: [],
			notes: [],
		},
		isModalOpen: true,
	};

	addItem = e => {
		e.preventDefault();
		console.log('It works!');

		// const newItem = {
		// 	name: e.target[0].value,
		// 	twitterLink: e.target[1].value,
		// 	image: e.target[2].value,
		// 	description: e.target[3].value,
		// };

		// this.setState(prevState => ({
		// 	items: [...prevState.items, newItem],
		// 	isModalOpen: false,
		// }));

		// e.target.reset();
	};

	openModal = () => {
		this.setState({
			isModalOpen: true,
		});
	};

	closeModal = () => {
		this.setState({
			isModalOpen: false,
		});
	};

	render() {
		const { isModalOpen } = this.state;
		const contextElements = {
			...this.state,
			addItem: this.addItem,
		};
		return (
			<BrowserRouter>
				<AppContext.Provider value={contextElements}>
					<Header openModalFn={this.openModal} />
					<h1>Hello WOrld!</h1>
					<Routes>
						<Route path='/' element={<TwittersView />} />
						<Route path='/articles' element={<ArticlesView />} />
						<Route path='/notes' element={<NotesView />} />
					</Routes>
					{isModalOpen && <Modal closeModalFn={this.closeModal} />}
				</AppContext.Provider>
			</BrowserRouter>
		);
	}
}

export default Root;
