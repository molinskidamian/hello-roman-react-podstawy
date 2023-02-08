import React from 'react';
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem';

const ListWrapper = ({ items }, props) => (
	<ul>
		{items.map(item => (
			<ListItem {...item} key={props.name} />
		))}
	</ul>
);

export default ListWrapper;
