'use client';

import { FC } from 'react';
import styles from './MealFilter.module.css';

interface MealFilterProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const MealFilter: FC<MealFilterProps> = ({ label, checked, onChange }) => {
  return (
    <div className={styles.filterItem}>
      <label className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.checkbox}
        />
        <div className={styles.customCheckbox}>
          {checked && <div className={styles.checkmark} />}
        </div>
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  );
};

export default MealFilter; 