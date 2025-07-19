import React from 'react'
import BlogBanner from '../components/Banners/BlogBanner'
import LatestBlogPostsSection from '../components/LatestBlogPostsSection'


function About() {
  return (
    <div className="bg-white text-[#0A192F] min-h-screen">
     
      <BlogBanner />
      <div className='container'>
      
      <p >
        <span className='font-bold'>Welcome to Our Blog</span><br /><br />
        Our blog platform is designed with simplicity and clarity in mind. Whether you're a reader looking for insightful content 
        or a writer eager to share ideas, we aim to provide a clean and user-friendly space that supports creative expression. 
        From tech updates to lifestyle tips, we offer diverse categories tailored to your interests. <br /><br />

        <span className='font-bold'>Why We Built This</span> <br /><br />
         This blog site was developed as part of a usability-focused research project. 
        After evaluating several high-traffic websites and understanding user preferences, we crafted a platform that emphasizes smooth navigation, 
        readable content, and ease of interaction. Each feature is carefully designed to improve accessibility and enhance user satisfaction.<br /><br />

        <span className='font-bold'>Our Vision</span><br /><br />
        We believe in continuous improvement based on real user feedback. As we evolve, our goal is to refine the interface, improve responsiveness, 
        and ensure a consistent experience across all devices. Your experience matters—so keep reading, keep exploring, and let us know how we can make 
        this space even better for you.<br /><br />


      </p>
      </div>
      <LatestBlogPostsSection />
    </div>
  )
}

export default About