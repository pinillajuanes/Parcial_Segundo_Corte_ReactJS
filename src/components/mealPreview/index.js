import React from 'react';

import './index.css';

const MealPreviw = ({ meal }) => {

	return (
		<div className='meal-previw'>
		<img src={meal.strMealThumb} alt={meal.strMeal} />
		</div>
	);
};

export default MealPreviw;
