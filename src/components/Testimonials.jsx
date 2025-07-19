import React from 'react'
import testimonials from './data/testimonials'

function Testimonials() {
  return (
        <div className="bg-white py-16 ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-12">
              What Our Readers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">“{t.feedback}”</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default Testimonials