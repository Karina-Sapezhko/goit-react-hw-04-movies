import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={styles.List}>
      <li>
        <NavLink
          activeClassName={styles.NavLinkActive}
          className={styles.NavLink}
          exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          activeClassName={styles.NavLinkActive}
          className={styles.NavLink}
        >
          Search movies
        </NavLink>
      </li>
    </ul>
  );
};
export default Navigation;
