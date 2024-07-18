'use client'
import React, { useEffect, useState } from 'react'
import CountDownText from './CountDownText'
import LoadingText from '../LoadingText'

const CountDown = () => {

    const [ countDownText, setCountDownText ] = useState(<LoadingText />)

    useEffect(() => {

        const countDownDate = new Date('August 4, 2024 23:59:59').getTime()
        const timeInterval = 1000

        const x = setInterval(() => {

            // get current time 
            const currentTime = new Date().getTime()

            // get time difference
            const timeVar = countDownDate - currentTime

            // get time format
            // const years = Math.floor(timeVar / (1000 * 60 * 60 * 24 * 365)).toString().padStart(2, '0')
            // const days = Math.floor((timeVar % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
            const days = Math.floor(timeVar / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
            const hours = Math.floor((timeVar % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
            const minutes = Math.floor((timeVar % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
            const seconds = Math.floor((timeVar % (1000 * 60)) / 1000).toString().padStart(2, '0')

            setCountDownText(() => {
                return  (
                    <div
                        className='flex items-center gap-8 absolute top-[14%] left-2/4 transform -translate-x-2/4 opacity-up'
                    >
                        <CountDownText number={days} timeFormat={'d'}  />
                        <CountDownText number={hours} timeFormat={'h'} />
                        <CountDownText number={minutes} timeFormat={'m'} />
                        <CountDownText number={seconds} timeFormat={'s'} />
                    </div>
                ) 
            })

            if(timeVar < 0) {
                clearInterval(x)
                setCountDownText(() => 'Count down over')
            }

        }, timeInterval)

    }, [])

  return (
    <>
        <div
            className='absolute top-[4%] left-2/4 transform -translate-x-2/4'
        >
            <div className='flex gap-2'>
                <p className='leading-6 font-manRope font-semibold text-base sm:text-2xl'>
                    AUGUST
                    <br />
                    <span className='ml-6 sm:ml-10'>2024</span>
                </p>
                <p className='font-bethanyElingston flex text-base sm:text-2xl'>
                    5-7<sup>th</sup>
                </p>
            </div>
        </div>
        {countDownText}
    </>
  )
}

export default CountDown