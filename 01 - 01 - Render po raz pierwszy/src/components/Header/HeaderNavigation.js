import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
	<nav className={styles.nav}>
		<ul className={styles.navMenu}>
			<li className={styles.navMenuItem}>
				<NavLink to='/' className={styles.link}>
					Twitters
				</NavLink>
			</li>
			<li className={styles.navMenuItem}>
				<NavLink to='/articles' className={styles.link}>
					Articles
				</NavLink>
			</li>
			<li className={styles.navMenuItem}>
				<NavLink to='/notes' className={styles.link}>
					Notes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default HeaderNavigation;
