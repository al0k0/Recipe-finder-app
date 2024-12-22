import { useState } from 'react'
import Home from './pages/Home'

import './index.css'
import MainPage from './pages/MainPage'
import { Route, Router, Routes } from 'react-router-dom'
import MealInfo from './pages/MealInfo'
import MealCard from './pages/MealCard'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
 <div className='min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-600'>
    <NavBar/>
 <Routes>
  
 <Route path ='/' element={<Home />} />
 <Route path ='/home' element={<Home />} />
 <Route path ='/about' element={<About />} />
 <Route path ='/contact' element={<Contact  />} />
  
 <Route path ='/mainpage' element={<MainPage />}/>
 <Route path="/mealcard/:categoryName" element={<MealCard />}/>
 <Route path ='/:mealid' element={<MealInfo />}/>
  
   </Routes>
   </div>

   <Footer/>
   </div>
  )
}

export default App
