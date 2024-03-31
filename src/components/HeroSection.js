// components/HeroSection.js
import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor  sit amet consectetur. Amet est posuere rhoncus</p>
        <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr></hr>
    </section>
  );
};

export default HeroSection;