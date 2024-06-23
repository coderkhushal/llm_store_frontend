"use client"
import { DashBoardRoutes } from '@/constants'
import React from 'react'
import DesktopSidebarItem from './desktop_sidebar_item'


import Link from 'next/link'
import { LogOut, LogOutIcon } from 'lucide-react'
import { useAuthContext } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'

const DesktopSidebar = () => {
  const { logout } = useAuthContext()
  const pathname= usePathname()
  return (
    <div className='w-1/6 hidden  h-full lg:flex py-10 justify-center px-4 border-r-2'>
      <div className="flex flex-col w-full items-center">
        <Link href='/'>
          <div className="flex space-x-4 items-center">

            <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" width={50} height={50} alt="logo" className='rounded-full' />
            <h1 className='font-bold text-2xl  '>LLMStore</h1>
          </div>
        </Link>
        <div className="flex flex-col space-y-4 w-full h-full my-10">

          {DashBoardRoutes.map((route, i) => (
            <DesktopSidebarItem key={i} route={route} />
          ))}
        </div>
        <div className="flex items-center cursor-pointer w-full justify-center space-x-3 py-10" onClick={logout}>

          <div className={`py-4 px-6 border-1   border-black-100 space-x-2 flex w-full shadow-sm rounded-xl`}>
            <LogOutIcon />
            <span className={`font-bold text-lg `}>

              {"Logout"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopSidebar