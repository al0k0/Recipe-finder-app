import React, { useState } from 'react';
import MealCard from './MealCard';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
const Navigate = useNavigate()
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      alert("Please enter something");
      return;
    }
      try {
        console.log("Searching for:", search);
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        console.log("Fetched Data:", jsonData.meals);
        setData(jsonData.meals || []); // If no meals are found, set an empty array
        if(jsonData.meals && jsonData.meals.length>0){
           
          const category = jsonData.meals[0].strCategory;
          console.log("Navigate to category", category);
          Navigate(`/mealcard/${category}`)
          
        }else{
          alert("No meal found for your search");
        }
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }
    const handleKeyDown= (e)=>{
     if(e.key==="Enter"){
      handleSearch()
     }
    }
  

  return (
    <>
      <div className='px-4 py-6'>
        
        <div className='flex flex-col items-center sm:flex-row justify-center gap-3  '>
          <div className='relative'>
        <button 
            onClick={handleSearch}
            className='absolute left-2 top-3.5 text-gray-600 transform hover:text-yellow-800 duration-300 '
            ><i class="fa-solid fa-magnifying-glass"></i></button>
       
          <input
            type="text" 
            placeholder='Enter Dishes'
            value={search}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            className='pl-10 p-2 w-full sm:w-96 text-lg bg-gray-300 rounded-md focus:outline-dotted focus:bg-yellow-800 hover:shadow-lg focus:shadow-lg transition duration-300 tracking-wider'/>
          </div>
        </div>
        <MealCard detail={data} />
      </div>
    </>
  );
};

export default MainPage;
