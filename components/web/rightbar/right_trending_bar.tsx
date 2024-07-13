"use client"
import React, { useEffect } from 'react'
import RightTrendingBarItem from './right_trending_bar_item'
import { LLM } from '@/types'
import { getTrendingModels } from '@/actions/model'
import Image from 'next/image'

const RightTrendingBar = () => {
  const [trending, setTrending] = React.useState<LLM[] | null>([])
  const [loading, setloading] = React.useState<boolean>(false)
  useEffect(() => {
    fetchTrending()
  }, [])
  const fetchTrending = async () => {
    setloading(true)
    const data = await getTrendingModels()

    if (data) {
      setTrending(data)
    }
    setloading(false)
  }
  return (
    <div className='rounded-xl shadow-md bg-white h-[45%] w-4/5 p-4'>

      <h1 className='font-semibold text-2xl '>Trending</h1>
      <div className="flex mt-2 flex-col">
        {(!loading && trending && trending?.length > 0) && trending.map((item, index) => {
          if (index < 4) {

            return <RightTrendingBarItem key={index} llm={item} />
          }
        })}
         {loading && <Image src="/assets/loading.gif" width={100} height={100} alt="loading" />}

      </div>
    </div>
  )
}

export default RightTrendingBar