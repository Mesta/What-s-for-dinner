'use client';

import { useState } from 'react';
import styles from './page.module.css';
import MealFilter from '@/components/MealFilter';

export default function Home() {
  const [dishQuery, setDishQuery] = useState('');
  const [filters, setFilters] = useState({
    fastFood: false,
    healthy: false,
    quickToCook: false,
  });

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handleRandomMeal = () => {
    // In a real app, this would fetch from an API or database
    alert('Random meal selected!');
  };

  return (
    <div className={styles.container}>
      <h1>What type of meal would you like?</h1>
      
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Enter a dish..."
          value={dishQuery}
          onChange={(e) => setDishQuery(e.target.value)}
          className={styles.searchInput}
        />
        
        <button 
          onClick={handleRandomMeal} 
          className={styles.randomButton}
        >
          Random
        </button>
      </div>
      
      <div className={styles.filtersSection}>
        <h2>Filters</h2>
        
        <div className={styles.filtersList}>
          <MealFilter 
            label="Fast Food" 
            checked={filters.fastFood} 
            onChange={() => handleFilterChange('fastFood')} 
          />
          
          <MealFilter 
            label="Healthy" 
            checked={filters.healthy} 
            onChange={() => handleFilterChange('healthy')} 
          />
          
          <MealFilter 
            label="Quick to Cook" 
            checked={filters.quickToCook} 
            onChange={() => handleFilterChange('quickToCook')} 
          />
        </div>
      </div>
    </div>
  );
} 