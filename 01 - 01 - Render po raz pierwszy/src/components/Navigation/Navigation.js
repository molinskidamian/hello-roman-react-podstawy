import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
	<nav className={styles.nav}>
		<ul className={styles.navMenu}>
			<li>
				<NavLink to='/' className={styles.link}>
					Twitters
				</NavLink>
			</li>
			<li>
				<NavLink to='/articles' className={styles.link}>
					Articles
				</NavLink>
			</li>
			<li>
				<NavLink to='/notes' className={styles.link}>
					Notes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
