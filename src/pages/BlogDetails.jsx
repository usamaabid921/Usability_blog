import React from 'react'
import { useParams } from 'react-router-dom';
import FeatureBlog from '../components/data/FeatureBlog';
import RecentBlog from '../components/data/RecentBlog';
import LatestBlogPosts from '../components/data/LatestBlogPosts';
import Blogs from '../components/data/Blogs';

function BlogDetails() {
  const { id } = useParams();  
  const allBlogs = [...FeatureBlog, ...RecentBlog, ...LatestBlogPosts, ...Blogs];

  const blog = allBlogs.find((b) => b.id === parseInt(id)); 

  if (!blog) {
    return <div className="text-center mt-10 text-red-500">Blog not found</div>;
  }
  
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold text-center text-[#0A192F] mb-10">{blog.title}</h1>
        <div className="flex flex-col lg:flex-row mb-10">
        
        <div className="w-full lg:w-1/2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-4"></h1>
          <p className="text-gray-700 leading-relaxed">{blog.content.substring(0, 1410)}.</p>
        </div>
      </div>

      {/* Full-width continued content below */}
      <div className="text-gray-700 leading-relaxed mb-10">
        <p className="text-gray-700 leading-relaxed">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;