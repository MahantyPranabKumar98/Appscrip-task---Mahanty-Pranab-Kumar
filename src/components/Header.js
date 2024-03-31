// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <div className={styles.headerlogo}>
      <img src="/images/logo.png"></img>
      </div>
    </header>
  );
};

export default Header;