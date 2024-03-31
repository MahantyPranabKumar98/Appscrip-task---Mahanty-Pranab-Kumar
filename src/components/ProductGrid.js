// components/ProductGrid.js
import React from 'react';
import styles from '../styles/ProductGrid.module.css';

const ProductGrid = () => {
  return (
    <section className={styles.productGrid}>
      <div className={styles.product}>
        <img src="/images/product1.jpg" alt="Product 1" />
        <h3>RECYCLED BACKPACK</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      <div className={styles.product}>
        <img src="/images/product2.jpg" alt="Product 2" />
        <h3>Product Name</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      <div className={styles.product}>
        <img src="/images/product3.jpg" alt="Product 3" />
        <h3>Product Name</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      <div className={styles.product}>
        <img src="/images/product4.jpg" alt="Product 4" />
        <h3>Product Name</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      <div className={styles.product}>
        <img src="/images/product5.jpg" alt="Product 5" />
        <h3>Product Name</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      <div className={styles.product}>
        <img src="/images/product6.jpg" alt="Product 6" />
        <h3>Product Name</h3>
        <p><a href="#">Sign in</a> or Create an account to see pricing</p>
      </div>
      {/* Add more products as needed */}
    </section>
  );
};

export default ProductGrid;