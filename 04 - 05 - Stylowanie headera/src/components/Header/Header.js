import React from 'react';
import styles from './Header.module.scss';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
	<header className={styles.wrapper}>
		<img src={logoImage} alt='logo' className={styles.logo} />
		<HeaderNavigation />
		<Button secondary onClick={openModalFn}>
			new Item
		</Button>
	</header>
);

export default Header;
