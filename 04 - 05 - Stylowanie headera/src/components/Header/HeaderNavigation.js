import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const Navigation = () => (
	<nav>
		<ul className={styles.wrapper}>
			<li className={styles.navItem}>
				<NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to='/'>
					twitters
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					activeClassName={styles.navItemLinkActive}
					className={styles.navItemLink}
					to='/articles'>
					articles
				</NavLink>
			</li>
			<li className={styles.navItem}>
				<NavLink
					activeClassName={styles.navItemLinkActive}
					className={styles.navItemLink}
					to='/notes'>
					notes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
