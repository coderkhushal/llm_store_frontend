import DesktopSidebar from '@/components/web/navigation/desktop_sidebar.'
import TopBar from '@/components/web/topbar/topbar'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex h-full w-full'>
        <DesktopSidebar/>
        <div className='flex flex-col w-full '>
          <TopBar/>
          {children}
        </div>
    </div>
  )
}

export default MainLayout