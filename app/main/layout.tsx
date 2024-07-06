"use client"
import DesktopSidebar from '@/components/web/navigation/desktop_sidebar.'
import TopBar from '@/components/web/topbar/topbar'
import { publicRoutes } from '@/constants'
import { useAuthContext } from '@/context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {


  return (
    <div className='flex h-full w-full'>
        <DesktopSidebar/>
        <div className='flex flex-col w-full  '>
          
          {children}
        </div>
    </div>
  )
}

export default MainLayout