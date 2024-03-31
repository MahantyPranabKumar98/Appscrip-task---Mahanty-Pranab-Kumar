// components/NavigationBar.js
import React from 'react';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">SKILLS</a></li>
        <li><a href="#">STORIES</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <hr></hr>
    </nav>
  );
};

export default NavigationBar;