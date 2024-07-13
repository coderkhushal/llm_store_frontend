import { useAuthContext } from '@/context/AuthContext'
import React from 'react'

const TopBarUser = () => {
  const {user} = useAuthContext()
  return (
    <div>
      <img src={user?.imageUrl ? user.imageUrl : "https://cdn.dribbble.com/users/5590809/avatars/normal/4a7cbb853d50ae0158f21535db83108a.png?1674656095"} alt="" className='w-10' />
    </div>
  )
}

export default TopBarUser