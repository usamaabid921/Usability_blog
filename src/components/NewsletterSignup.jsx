import React from 'react'

function NewsletterSignup() {
    return (
        <div className="bg-[#F1FAFD] py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#00B4D8] text-center mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get the latest updates, articles, and resources delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-2/3 px-4 py-3 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-[#00B4D8]"
              />
              <button
                type="submit"
                className="bg-[#00B4D8] text-white px-6 py-3 rounded-md hover:bg-[#0096c7] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  )
}

export default NewsletterSignup