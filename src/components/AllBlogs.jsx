import React from 'react'
import Blogs from './data/Blogs'
import { Link } from 'react-router-dom';
function AllBlogs() {
  return (
    <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-[#00B4D8] mb-6 text-center">All Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
            {Blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.id}`}>
                                                        <button className="mt-4 text-white bg-[#00B4D8] hover:bg-[#009cbf] p-2 rounded-md">
                                                          Read More
                                                        </button>
                                                      </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default AllBlogs