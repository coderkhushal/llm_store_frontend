"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DesktopSidebarItem = ({route}:{route: {name: string, href: string, icon: any}}) => {
  const pathname =usePathname()
  return (
    <Link href={route.href} className='w-full'>
    <div className={`py-4 px-6 border-1 ${pathname==route.href ? "bg-tertiary text-white":""}  border-black-100 space-x-2 flex w-full shadow-sm rounded-xl`}>
      <route.icon />
      <span className={`font-bold text-lg `}>

      {route.name}
      </span>
    </div>
    </Link>
  )
}

export default DesktopSidebarItem