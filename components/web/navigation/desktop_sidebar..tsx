"use client"
import { DashBoardRoutes } from '@/constants'
import React from 'react'
import DesktopSidebarItem from './desktop_sidebar_item'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const DesktopSidebar = () => {
  
  return (
    <div className='w-1/6 hidden  h-full lg:flex py-10 justify-center px-4 border-r-2'>
      <div className="flex flex-col w-full items-center">
        <div className="flex space-x-4 items-center">
          <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" width={50} height={50} alt="logo" className='rounded-full' />
          <h1 className='font-bold text-2xl  '>LLMStore</h1>
        </div>
        <div className="flex flex-col space-y-4 w-full my-10">

          {DashBoardRoutes.map((route, i) => (
            <DesktopSidebarItem key={i} route={route} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar