import React from 'react'

const CountDownText = ({number,timeFormat}) => {
  return (
    <p className='text-baby-pink text-6xl font-manRope font-bold tracking-[-2.22px] relative'>
        {number}<span className='text-white'>.</span>
        <span className='text-black text-[20px] absolute top-[7px] right-0'>{timeFormat}</span>
    </p>
  )
}

export default CountDownText