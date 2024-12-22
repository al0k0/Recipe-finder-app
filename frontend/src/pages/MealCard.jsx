import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const MealCard = ({detail}) => {
  const {categoryName} = useParams()
  const [meals, setMeals]= useState([])
  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    if (categoryName) fetchMealsByCategory(); // Fetch meals for selected category
  }, [categoryName]);


  return (
    <div  className='bg-gradient-to-bpb-24'>
    <div className=' flex flex-wrap gap-8 justify-center w-11/12 max-w-5xl m-auto pt-20 '>
      {meals && meals.map((curItem) => (
        <div key={curItem.idMeal} 
        className=" w-[280px] h-[380px] bg-gradient-to-b  rounded-2xl text-center transform hover:scale-110 transition-transform duration-300 p-4  shadow-xl hover:shadow-2xl animate-fadeIn">
          <img src={curItem.strMealThumb}
           className='shadow-md rounded-lg hover:shadow-lg animate-fadeIn ' alt={curItem.strMeal} />
         

          <p className='text-xl font-semibold h-[50px] pt-2 line-clamp-2  '>{curItem.strMeal}</p>
          <NavLink to={`/${curItem.idMeal}`}>
          <button 
  className="bg-gradient-to-r from-yellow-700 to-yellow-900 hover:from-yellow-600 hover:to-yellow-800 active:text-black text-white rounded-md px-5 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300"
>
  Recipe
</button>
          </NavLink>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default MealCard;
