import React from 'react'
import LatestBlogPosts from './data/LatestBlogPosts'
import { Link } from 'react-router-dom';

function LatestBlogPostsSection() {
    return (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#0A192F]">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {LatestBlogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-md transition-all duration-300">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-5">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h3 className="text-lg font-semibold mt-2 text-[#0A192F]">{post.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`}>
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

export default LatestBlogPostsSection