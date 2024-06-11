import React from 'react'
import Bling from './Bling'

const Footer = () => {
    
    const marqueeArray = ['0', '1', '2', '3', '4', '5', '6']
    const text = "We're going live soon"

  return (
    <div className='w-screen bg-[#282828] flex gap-8 whitespace-nowrap overflow-hidden relative py-3'>
        <div
            className={`inline-flex gap-8 marquee-anim`}
        >
            {
                marqueeArray.map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-8'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                                {text}
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
        <div
            className={`inline-flex gap-8 marquee-anim`}
        >
            {
                marqueeArray.map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-8'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                            {text}
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
        <div
            className={`inline-flex gap-8 marquee-anim`}
        >
            {
                marqueeArray.map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-8'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                            {text}
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
        <div
            className={`inline-flex gap-8 marquee-anim`}
        >
            {
                marqueeArray.map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-8'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                            {text}
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer