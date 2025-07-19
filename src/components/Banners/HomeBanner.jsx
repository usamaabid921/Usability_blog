import React from 'react'
import { NavLink } from 'react-router-dom'
import Homebannerbackground from '../../assets/Homebannerbackground.jpg'

function HomeBanner() {
  return (
    <div className="bg-cover bg-center py-20 text-center" style={{ backgroundImage: `url(${Homebannerbackground})` }}>
        <div className="container mx-auto">
        
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFF] mb-4">
          Welcome to the TechVerse
        </h1>
        <p className="text-lg md:text-xl text-[#FFF] mb-6">
          Dive into insightful articles, tutorials, and tech stories.
        </p>
        <NavLink to="/blogs" className="font-semibold">
        <button className="bg-[#00B4D8] hover:bg-[#0096c7] text-white px-6 py-3 rounded-full font-semibold transition">
          Explore Blogs
        </button></NavLink>
      </div>
        </div>
    </div>
  )
}

export default HomeBanner