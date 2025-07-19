import React from 'react'

function Input ({type, value, placeholder, onChange, className}) {
    return type === "textarea" ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`border-2 border-[#00B4D8]  p-2 rounded w-full resize-none ${className}`} // Ensures no resize issues
        />
      ) : (
    <input 
    type={type} 
    value={value} 
    placeholder={placeholder} 
    onChange={onChange}
    className={`border-2 border-[#00B4D8] h-[45px] rounded-md px-2 ${className}`} 
    />
);
}


export default Input