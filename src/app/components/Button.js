'use client'
import React from 'react'

const Button = ({ text, className, link }) => {

  return (
    <a
      href={link}
      className={`${className} text-custom-white w-fit px-8 py-4 rounded-full cursor-pointer relative overflow-hidden z-0 custom-cta`}
    >
      <p className='z-10 cta-text font-manRope font-semibold'>
      { text }
      </p>
      <div 
        className='!-z-10 h-full w-2/6 cta-block-item cta-block-item-A bg-baby-pink'
      />
      <div 
        className=' !-z-10 h-full w-2/6 cta-block-item cta-block-item-B bg-bananna-yellow'
      />
      <div 
        className='!-z-10 h-full w-2/6 cta-block-item cta-block-item-C bg-baby-blue'
      />
    </a>
  )
}

export default Button