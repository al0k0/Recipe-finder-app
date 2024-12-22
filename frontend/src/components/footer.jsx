import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-800 py-4'>
      <p className="text-center text-black tracking-wide text-sm sm:text-base md:text-lg lg:text-lg">
        Copyrights © {new Date().getFullYear()} MealRecipes. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
