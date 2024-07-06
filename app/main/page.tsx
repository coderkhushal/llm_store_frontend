"use client"
import { getModelsPaginated } from '@/actions/model'
import { Button } from '@/components/ui/button'
import HeaderImage from '@/components/web/home/header_image'
import HomeCard from '@/components/web/home/home_card'
import ScrollableModelsList from '@/components/web/others/scrollable_models_list'
import RightBarBigCard from '@/components/web/rightbar/right_bar_big_card'
import RightBar from '@/components/web/rightbar/rightbar'
import TopBar from '@/components/web/topbar/topbar'
import { categories } from '@/constants'
import { useAuthContext } from '@/context/AuthContext'
import { LLM } from '@/types'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'



export default function HomePage() {
  const {user, fetchUser} = useAuthContext()
  const [llmList, setllmList] = useState<LLM[]>([])
  const [showCategories, setShowCategories] = useState<boolean>(false)

  useEffect(() => {
    fetchLLMs()
  }, [user])
  const fetchLLMs = async () => {
    if(!user){
      await fetchUser()
    }
    if(user){

      const data = await getModelsPaginated(1)
      if (data)
        setllmList([...llmList, ...data])
    }
  }

  return (
    <div className="flex flex-col w-full h-full ">
      <TopBar />
      <div className='h-full bg-white overflow-y-hidden  flex w-full '>
        <div className="w-full lg:w-5/6 flex flex-col py-10 h-[85vh] items-center overflow-y-auto">
          <HeaderImage src={"https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg"} />

          <div className='w-5/6 mt-8 flex flex-col space-y-2 px-4'>
            <div className="flex justify-between ">
              <h1 className='font-semibold text-xl'>Categories</h1>
              <Button className="text-tertiary font-medium" variant={"link"} onClick={() => { setShowCategories(!showCategories) }}>View All</Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((e, index) => {
                if (showCategories && index > 3) {

                  return (

                    <div key={index} className="bg-gray-100 py-3 px-2 font-semibold flex lg:pl-6 space-x-2 rounded-2xl">
                      <e.icon />
                      <span className='text-sm lg:text-base  '>{e.name}</span>
                    </div>
                  )

                }
                else if (index <= 3) {
                  return (
                    <div key={index} className="bg-gray-100 py-3 px-2 font-semibold flex lg:pl-6 w-full space-x-2 rounded-2xl items-center">
                      <e.icon className="size-5" />
                      <span className='text-sm lg:text-base '>{e.name}</span>
                    </div>
                  )

                }
              }
              )}


            </div>
          </div>
          <div className='w-5/6 h-full  mt-8 flex flex-col   space-y-2 px-4 py-4'>
            <div className="flex justify-between">
              <h1 className='font-semibold text-xl'>Top LLMs</h1>
              {/* <Button className="text-tertiary font-medium" variant={"link"} onClick={() => { setShowCategories(!showCategories) }}>View All</Button> */}
            </div>
            <div className='flex overflow-x-hidden  lg:w-[53vw] '>

              <ScrollableModelsList llms={llmList}  />
            </div>
              
          </div>






        </div>
        <RightBar />
      </div>
    </div>
  );
}



