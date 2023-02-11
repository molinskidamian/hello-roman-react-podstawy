import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = () => (
	<header className={styles.wrapper}>
		<img src={logoImage} alt='logo' className={styles.logo} />
		<HeaderNavigation />
		<Button secondary>new Item</Button>
	</header>
);

export default Header;
