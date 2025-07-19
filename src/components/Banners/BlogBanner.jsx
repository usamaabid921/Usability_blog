import React from 'react'
import aboutbannerimage from '../../assets/aboutbannerimage.avif'

function BlogBanner() {
  return (
    <div className="bg-cover bg-center py-20 text-center" style={{ backgroundImage: `url(${aboutbannerimage})` }}>
            <div className="container mx-auto">
            
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFF] mb-4">
            About Our Blog
            </h1>
            <p className="text-lg md:text-xl text-[#FFF] mb-6">
             A user-centered platform inspired by real feedback — designed to be simple, fast, and beautiful.
            </p>
            <button className="bg-[#00B4D8] hover:bg-[#0096c7] text-white px-6 py-3 rounded-full font-semibold transition">
              Explore Blogs
            </button>
          </div>
            </div>
        </div>
  )
}

export default BlogBanner