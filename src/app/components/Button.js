'use client'
import React from 'react'

const Button = ({ propFunction, text, className }) => {

    const handleClick = (e) => {
        e.preventDefault()
        propFunction()
    }

  return (
    <button
      className={`${className} bg-cta-black text-custom-white w-fit px-8 py-4 rounded-full font-manRope cursor-pointer`}
      onClick={handleClick}
    >
      { text }
    </button>
  )
}

export default Button