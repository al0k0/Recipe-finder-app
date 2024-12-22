import React, { useEffect, useState } from 'react';
import MainPage from './MainPage';
import { Link } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState([]);


  // Fetching categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch meals based on selected category


  return (
    
    <div className='pb-24'>
      <MainPage />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
      {categories.map((category) => (
          <Link
            key={category.idCategory} 
            to={`/mealcard/${category.strCategory}`} // Link with category parameter
            className="  flex flex-col cursor-pointer text-center transform hover:scale-105 transition duration-300 mx-10 "
          >
            
            <img src={category.strCategoryThumb} 
            className='shadow-2xl rounded-xl hover:shadow-lg animate-fadeIn' alt={category.strCategory} />
            <h2 className='text-black transition-colors duration-300 hover:text-yellow-800'>{category.strCategory}</h2>
         
          </Link>
        ))}
      </div>
      {/* <MealCard detail={meals}  /> */}
    </div>
  );
};

export default Home;
