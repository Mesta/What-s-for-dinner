'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [mealInput, setMealInput] = useState('');
  const [filters, setFilters] = useState({
    fastFood: false,
    healthy: false,
    quickToCook: false
  });

  const handleFilterChange = (filterName: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName as keyof typeof prev]
    }));
  };

  const handleRandomMeal = () => {
    console.log('Random meal selected');
    // Implementation for random meal selection
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meal search:', mealInput, 'Filters:', filters);
    // Handle meal search with filters
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.searchContainer}>
            <div className={styles.inputWithButton}>
              <div className={styles.inputLabel}>In my frigde, there is...</div>
              <input
                type="text"
                value={mealInput}
                onChange={(e) => setMealInput(e.target.value)}
                placeholder="a tomato!"
                className={styles.searchInput}
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                aria-label="Submit"
              >
                <svg className={styles.enterIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L6 15L18 15L18 13L21 16L18 19L18 17L3 17L3 9L6 9Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.filtersSection}>
            <div className={styles.filtersList}>
              <div className={styles.filterItem}>
                <input
                  type="checkbox"
                  id="healthy"
                  checked={filters.healthy}
                  onChange={() => handleFilterChange('healthy')}
                  className={styles.checkbox}
                />
                <label htmlFor="healthy" className={styles.filterLabel}>Healthy</label>
              </div>
              
              <div className={styles.filterItem}>
                <input
                  type="checkbox"
                  id="quickToCook"
                  checked={filters.quickToCook}
                  onChange={() => handleFilterChange('quickToCook')}
                  className={styles.checkbox}
                />
                <label htmlFor="quickToCook" className={styles.filterLabel}>Quick to Cook</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
