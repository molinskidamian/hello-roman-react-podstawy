import React from 'react';
import ListItem from './ListItem/ListItem';

const ListWrapper = ({ items }, props) => (
	<ul>
		{items.map(item => (
			<ListItem {...item} key={props.name} />
		))}
	</ul>
);

export default ListWrapper;
