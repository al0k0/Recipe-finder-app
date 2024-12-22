import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const MealInfo = () => {
    const {mealid} = useParams()
    const [info, setInfo]= useState(null)
    // console.log(mealid)
    const getinfo= async()=>{
    
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const response = await get.json()
        // console.log(response);        
        setInfo(response.meals[0])
      
      }
      if(info != ""){
        getinfo()
    }
      
  return (
    <div>
    {!info ? (
      <p className="text-center text-red-600 text-xl font-bold mt-10">
        Data not found
      </p>
    ) : (
      <div className="flex flex-col lg:flex-row gap-8 items-center p-5 md:p-10 animate-fadeIn">
        {/* Image Section */}
        <img
          src={info.strMealThumb}
          className="w-full max-w-sm sm:max-w-md lg:max-w-xs rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          alt={info.strMeal}
        />
  
        {/* Details Section */}
        <div className="text-black space-y-6 max-w-full lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 border-b-4 border-yellow-800 pb-2">
            Recipe Detail
          </h1>
  
          <span className="bg-yellow-800 text-white text-lg sm:text-xl px-4 py-2 rounded-md shadow-md">
            {info.strMeal}
          </span>
  
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-4">
            Instructions
          </h2>
  
          <p className="text-sm sm:text-md text-gray-800 leading-6 sm:leading-7 tracking-wide">
            {info.strInstructions}
          </p>
        </div>
      </div>
    )}
  </div>
  
  )
}

export default MealInfo