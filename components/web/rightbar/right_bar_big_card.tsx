import React from 'react'

const RightBarBigCard = () => {
  return (
    <div className='rounded-xl flex-col space-y-2  shadow-md bg-white h-1/2  flex  items-center w-4/5 px-4 pt-8'>
        <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" alt="llm" className='w-full rounded-xl h-3/5' />
        

        <h1 className='text-xl font-bold px-2'>EduLLM</h1>
        <h1 className='text-md text-gray-500  font-bold px-2'>EDUCATION</h1>
        <button className='px-2 w-4/5 rounded-2xl py-1 bg-tertiary text-white font-semibold text-xl'>$20</button>
        
    </div>
  )
}

export default RightBarBigCard