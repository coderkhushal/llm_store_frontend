import React from 'react'
import SearchBar from './searchbar'
import TopBarUser from './topbar_user'

const TopBar = ({lgTitle, showSearchBar= true, showTopBarUser= true}:{lgTitle: string,  showSearchBar?: boolean,showTopBarUser?: boolean}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">

    <div className='w-full py-8  flex justify-between px-10 lg:pl-20'>
        <h1 className='font-bold text-3xl hidden lg:block'>{lgTitle}</h1>
        <h1 className='font-bold text-3xl  lg:hidden'>Logo</h1>
        <div className="flex space-x-2">

        {showSearchBar && <SearchBar/>}
        {showTopBarUser &&<TopBarUser/>}
        </div>
    </div>
    <div className="w-[92%] border-2"></div>
    </div>
  )
}

export default TopBar