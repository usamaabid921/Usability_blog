import React from 'react'
import { FaGoogle, FaFacebook,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function RegistrationPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-80 relative">
        <button
          className="bg-[#00B4D8] rounded-md px-1 absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-center mb-6 text-[#00B4D8]">Join Us With</h2>
        <div className="space-y-4">
          <button className="bg-[#00B4D8] w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-[#a5c0c5]">
            <FaGoogle /> Google
          </button>
          <button className="bg-[#00B4D8] w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-[#a5c0c5]">
          <MdEmail /> Email</button>
          <button className="bg-[#00B4D8] w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-[#a5c0c5]">
            <FaFacebook /> Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPopup