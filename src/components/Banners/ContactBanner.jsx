import React from 'react'
import aboutbannerimage from '../../assets/aboutbannerimage.avif'

function ContactBanner() {
  return (
    <div className="bg-cover bg-center py-10 text-center" style={{ backgroundImage: `url(${aboutbannerimage})` }}>
               <div className="container mx-auto">
               
             <div className="max-w-3xl mx-auto px-4">
               <h1 className="text-4xl md:text-5xl font-bold text-[#FFF] mb-4">
               Contact Us
               </h1>
               
               
             </div>
               </div>
           </div>
     )
}

export default ContactBanner