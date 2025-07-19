import React from 'react'
import RecentBlog from './data/RecentBlog'
import { Link } from 'react-router-dom';

function RecentBlogPosts() {
    return (
        <div className="bg-white py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-[#00B4D8] mb-6 text-center">Recent Blog Posts</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {RecentBlog.map(blog => (
                <div key={blog.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={blog.image} alt={blog.title} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#0A192F] mb-1">{blog.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
                    <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
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
        </div>
      )
    }

export default RecentBlogPosts