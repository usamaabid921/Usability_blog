import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBanner from '../components/Banners/HomeBanner'
import FeaturedBlogPosts from '../components/FeaturedBlogPosts'
import RecentBlogPosts from '../components/RecentBlogPosts'
import NewsletterSignup from '../components/NewsletterSignup'
import Testimonials from '../components/Testimonials'
import CategorySection from '../components/CategorySection'
import LatestBlogPostsSection from '../components/LatestBlogPostsSection'

function Home() {
  return (
    <>
      <HomeBanner />
      <FeaturedBlogPosts />
      <RecentBlogPosts />
      <NewsletterSignup />
      <Testimonials />
      <CategorySection />
      <LatestBlogPostsSection />
      
    </>
  )
}

export default Home