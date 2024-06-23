import { LLM } from '@/types'
import Link from 'next/link'
import React from 'react'

const HomeCard = ({llm}:{llm: LLM}) => {
  return (
    <div className='rounded-xl   shadow-md bg-white w-full    '>
      <Link href={`/main/llm/${llm.id}`} className='h-full flex-col flex space-y-2 p-2 lg:p-4 pt-2 w-full'>
    <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" alt="llm" className='w-full rounded-xl h-3/5' />
    

    <h1 className='text-base lg:text-xl font-bold px-3'>{llm.title}</h1>
    <div className="flex justify-between items-center lg:px-1">

    <h1 className='text-xs lg:text-base text-gray-500  font-bold lg:px-2 '>{llm.category}</h1>
    <button className='px-2 w-2/5 rounded-2xl py-1 text-tertiary bg-gray-200 font-semibold lg:text-xl'>Get</button>
    </div>
    
      </Link>
</div>
  )
}

export default HomeCard