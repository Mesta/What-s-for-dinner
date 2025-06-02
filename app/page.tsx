'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [mealInput, setMealInput] = useState('');
  const [filters, setFilters] = useState({
    healthy: false,
    quickToCook: false,
    vegetarian: false
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
        <h1 className={styles.title}>What's for Dinner?</h1>
        <p className={styles.subtitle}>
          Tell us what's in your fridge and we'll suggest delicious recipes just for you!
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.searchContainer}>
            <div className={styles.inputWithButton}>
              <div className={styles.inputLabel}>In my fridge, there is...</div>
              <input
                type="text"
                value={mealInput}
                onChange={(e) => setMealInput(e.target.value)}
                placeholder="tomatoes, chicken, pasta..."
                className={styles.searchInput}
              />
              <button
                type="submit"
                className={styles.submitButton}
                aria-label="Search for recipes"
              >
                <svg className={styles.enterIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <button
              type="button"
              onClick={handleRandomMeal}
              className={styles.randomButton}
            >
              🎲 Surprise Me!
            </button>
          </div>
          
          <div className={styles.filtersSection}>
            <h3 className={styles.filtersTitle}>Dietary Preferences</h3>
            <div className={styles.filtersList}>
              <div 
                className={`${styles.filterItem} ${filters.healthy ? styles.active : ''}`}
                onClick={() => handleFilterChange('healthy')}
              >
                <input
                  type="checkbox"
                  id="healthy"
                  checked={filters.healthy}
                  onChange={() => handleFilterChange('healthy')}
                  className={styles.checkbox}
                />
                <label htmlFor="healthy" className={styles.filterLabel}>🥗 Healthy</label>
              </div>

              <div 
                className={`${styles.filterItem} ${filters.quickToCook ? styles.active : ''}`}
                onClick={() => handleFilterChange('quickToCook')}
              >
                <input
                  type="checkbox"
                  id="quickToCook"
                  checked={filters.quickToCook}
                  onChange={() => handleFilterChange('quickToCook')}
                  className={styles.checkbox}
                />
                <label htmlFor="quickToCook" className={styles.filterLabel}>⚡ Quick to Cook</label>
              </div>

              <div 
                className={`${styles.filterItem} ${filters.vegetarian ? styles.active : ''}`}
                onClick={() => handleFilterChange('vegetarian')}
              >
                <input
                  type="checkbox"
                  id="vegetarian"
                  checked={filters.vegetarian}
                  onChange={() => handleFilterChange('vegetarian')}
                  className={styles.checkbox}
                />
                <label htmlFor="vegetarian" className={styles.filterLabel}>🌱 Vegetarian</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

