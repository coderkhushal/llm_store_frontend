import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeaderImage = ({ src }: { src: string }) => {
  return (
    <div className="flex w-4/5 h-1/2 items-center relative">
      
      <Image
        src={src}
        alt="Trending LLM"
        width={500}
        height={500}
        className=' rounded-3xl w-full h-full'
      />
      <div className="flex flex-col absolute items-start lg:px-10 px-2 lg:space-y-1  backdrop-blur-md bottom-0 z-10 w-full lg:h-1/3 h-1/2 justify-start ">
        <Button variant={"link"} className=' text-tertiary py-0'>EDUCATION</Button>
        <div className="flex justify-between w-full">

          <div className="flex flex-col w-3/5 px-2">
            <h1 className=' lg:text-2xl font-bold text-white'> EduBuddy </h1>
            <h2 className=' text-xs lg:text-lg font-semibold text-gray-300 '>
              A platform for students to learn and grow
            </h2>
          </div>

          <button className='lg:px-2 lg:w-1/5 w-2/5 rounded-3xl hover:bg-sky-600 bg-tertiary text-white font-semibold lg:text-xl text-sm p-0 '>
            Get
          </button>

        </div>
      </div>
    </div>
  )
}

export default HeaderImage