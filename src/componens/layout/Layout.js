import React from 'react';
import Navigation from './navigation/Navigation';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>
    </>
  );
};
export default Layout;

