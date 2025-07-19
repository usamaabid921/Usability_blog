import React from 'react'

function Button({type, btntext}) {
  return (
    <button type={type} className='bg-[#00B4D8] text-white rounded-md w-[163px] h-[45px]'>{btntext}</button>
  )
}

export default Button