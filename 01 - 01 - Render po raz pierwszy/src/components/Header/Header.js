import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = () => (
	<header className={styles.wrapper}>
		<img src={logoImage} alt='FavNote Logo' />
		<HeaderNavigation />
		<Button>new item</Button>
	</header>
);

export default Header;
