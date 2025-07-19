import React from 'react'
import { useState } from 'react'
import Faq from '../components/data/Faq'

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className='container'>
       <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-[#00B4D8] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {Faq.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 font-medium focus:outline-none flex justify-between items-center bg-[#919799]
               text-white transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span className="text-[#00B4D8] text-xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-4 text-gray-600 mt-5">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs