import { LLM } from '@/types'
import React from 'react'

const RightTrendingBarItem = () => {
  return (
    <div className='flex space-x-3 p-2'>
        <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" alt="llm" className=' h-14 rounded-xl' />
        <div className="flex flex-col space-y-1">

        <h2 className='font-semibold'>my-llm</h2>
        <h3 className='text-gray-500 text-sm'>PHARMACY</h3>
        </div>
    </div>
  )
}

export default RightTrendingBarItem