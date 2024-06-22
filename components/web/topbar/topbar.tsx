import React from 'react'
import SearchBar from './searchbar'

const TopBar = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">

    <div className='w-full py-8  flex justify-between px-10 lg:px-20'>
        <h1 className='font-bold text-3xl '>LLMs</h1>
        <SearchBar/>
    </div>
    <div className="w-[92%] border-2"></div>
    </div>
  )
}

export default TopBar