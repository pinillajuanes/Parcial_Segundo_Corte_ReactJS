import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMealById } from '../services/mealtService';

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const mealData = await FetchMealById(id);
        setMeal(mealData);
      } catch (error) {
        console.error('Error al obtener los detalles de la receta:', error);
      }
    }

    fetchMeal();
  }, [id]);

  if (!meal) {
    return <div>Cargando detalles de la receta...</div>;
  }

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>Ingredientes: {meal.strIngredients}</p>
      <p>Instrucciones: {meal.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
