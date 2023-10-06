import React, { useEffect, useState } from 'react';
import { FetchMealByFirstLetter } from '../../services/mealtService';
import MealPreviw from '../mealPreview';

import './index.css';

const MealPreviwGrid = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchMealByFirstLetter('b')
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener las comidas:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando comidas...</p>;
  }

  return (
    <div className='meal-grid'>
      {meals.map((meal) => (
        <MealPreviw key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default MealPreviwGrid;
