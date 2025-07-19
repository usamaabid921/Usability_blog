import React from 'react'
import Categories from './data/Categories'

function CategorySection() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-10">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection