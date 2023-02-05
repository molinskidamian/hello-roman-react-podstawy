import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ name, image, link, description }) => (
	<li>
		<img src={image} alt={name} className={styles.image} />
		<strong>
			<a href={link}>{name}</a>
		</strong>
		: {description}
	</li>
);

export default ListItem;
