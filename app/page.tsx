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
              >
                Feed me!
              </button>
            </div>
            
            <button 
              type="button" 
              className={styles.randomButton}
              onClick={handleRandomMeal}
            >
              Random
            </button>
          </div>
          
          <div className={styles.filtersSection}>
            <h2 className={styles.filtersTitle}>Filters</h2>
            
            <div className={styles.filterItem}>
              <input
                type="checkbox"
                id="fastFood"
                checked={filters.fastFood}
                onChange={() => handleFilterChange('fastFood')}
                className={styles.checkbox}
              />
              <label htmlFor="fastFood" className={styles.filterLabel}>Fast Food</label>
            </div>
            
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
        </form>
      </div>
    </main>
  );
}
