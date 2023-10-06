// En SearchResult.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchMealByName } from '../services/mealtService';
import MealPreviw from './MealPreviw';

const SearchResult = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        const results = await SearchMealByName(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Error al buscar recetas:', error);
      }
    }

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className='meal-grid'>
      {searchResults.length === 0 ? (
        <p>No se encontraron recetas para "{searchTerm}"</p>
      ) : (
        searchResults.map((meal) => (
          <MealPreviw meal={meal} key={meal.idMeal} />
        ))
      )}
    </div>
  );
};

export default SearchResult;
