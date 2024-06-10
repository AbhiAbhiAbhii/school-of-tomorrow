import React from 'react'
import Bling from './Bling'

const Footer = () => {
    

  return (
    <div className='w-full bg-[#282828] flex gap-4 whitespace-nowrap overflow-hidden relative py-3'>
        <div
            className={`inline-flex flex-row gap-4 marquee-anim`}
        >
            {
                ['0', '1'].map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-4'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                                This website is going live soon
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
        <div
            className={`inline-flex flex-row gap-4 marquee-anim`}
        >
            {
                ['0', '1'].map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-4'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                                This website is going live soon
                            </p>
                            <Bling />
                        </div>
                    )
                })
            }
        </div>
        <div
            className={`inline-flex flex-row gap-4 marquee-anim`}
        >
            {
                ['0', '1'].map((item) => {
                    return(
                        <div
                            key={item}
                            className='flex items-center justify-center gap-4'
                        >
                            <p className='font-mono text-custom-white text-lg'>
                                This website is going live soon
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