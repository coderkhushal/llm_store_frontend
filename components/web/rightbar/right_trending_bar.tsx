import React from 'react'
import RightTrendingBarItem from './right_trending_bar_item'

const RightTrendingBar = () => {
  return (
    <div className='rounded-xl shadow-md bg-white h-1/2 w-4/5 p-4'>
      
      <h1 className='font-semibold text-2xl '>Trending</h1>
      <div className="flex mt-2 flex-col">
        <RightTrendingBarItem/>
        <RightTrendingBarItem/>
        <RightTrendingBarItem/>
        <RightTrendingBarItem/>
      </div>
    </div>
  )
}

export default RightTrendingBar