import React from 'react'
import RightTrendingBar from './right_trending_bar'
import RightBarBigCard from './right_bar_big_card'

const RightBar = () => {
  return (
    <div className='hidden h-full py-2 bg-gradient-to-r from-slate-50 to-gray-200 space-y-3 w-1/4 items-center lg:flex flex-col'>
      <RightTrendingBar/>
        <RightBarBigCard/>
    </div>
  )
}

export default RightBar