// components/SortDropdown.js

import { useState } from 'react';
import styles from '../styles/SortDropdown.module.css';

const SortDropdown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState('recommended');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className={styles.dropdownCont}>
    <div className={styles.SortDropdown}>
    <select value={selectedOption} onChange={handleChange}>
      <option value="recommended">Recommended</option>
      <option value="newest">Newest First</option>
      <option value="price_high">Price High to Low</option>
      <option value="price_low">Price Low to High</option>
    </select>
    </div>
    <hr></hr>
    </div>
  );
};

export default SortDropdown;
