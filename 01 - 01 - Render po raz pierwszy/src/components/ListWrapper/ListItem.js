import React from 'react';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';

const ListItem = ({ name, image, link, description }) => (
	<li>
		<img src={image} className={styles.image} />
		<strong>{name}</strong>: {description} <Button href={link}>Visit him!</Button>
	</li>
);

export default ListItem;
