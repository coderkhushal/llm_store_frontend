import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center space-x-2'>
        <input className='lg:w-96 w-32 h-10 bg-gray-100 border-black-100 rounded-lg px-4' placeholder='Search for anything'/>
        <Search/>
    </div>
  )
}

export default SearchBar