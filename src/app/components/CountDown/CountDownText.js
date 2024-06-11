import React from 'react'

const CountDownText = ({number,timeFormat}) => {
  return (
    <p className='text-baby-pink text-4xl sm:text-6xl font-manRope font-bold tracking-[-2.22px] relative'>
      {number}<span className='text-[#E2DC8F]'>.</span>
      <span className='text-black text-base sm:text-[20px] absolute sm:top-[7px] top-0 right-[-12%] sm:right-0'>{timeFormat}</span>
    </p>
  )
}

export default CountDownText