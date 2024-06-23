import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center space-x-2'>
        <input className='lg:w-60 w-32 h-10 bg-slate-50 border-black-100 rounded-lg px-4' placeholder='  🔍  Search '/>
        
    </div>
  )
}

export default SearchBar