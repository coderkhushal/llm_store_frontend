"use client"
import HomeCard from '@/components/web/home/home_card'
import ModelsBoughtCard from '@/components/web/profile/models_bought_card'
import ProfileImage from '@/components/web/profile/profile_image'
import { useAuthContext } from '@/context/AuthContext'
import React, { useEffect } from 'react'

const ProfilePage = () => {
  const {user, fetchUser} = useAuthContext()
  useEffect(()=>{
    if(!user){
      fetchUser()
    }
  },[user])
  if(!user){
    return (
      <div>

      </div>
    )
  }
  return (
    <div className="w-full h-full overflow-y-scroll flex justify-center  ">

    <div className='flex py-14 px-10 flex-col w-2/3 space-y-2 h-full '>
      <ProfileImage image={user.imageUrl} />
      <div className="flex pr-10 justify-between w-full">
        <div className="flex flex-col space-y-2">

          <h1 className=' font-bold text-3xl'>{user?.username}</h1>
          <h2 className=' font-bold text-gray-500 text-lg '>{user?.email}</h2>
          <div className="flex space-x-2 py-4 ">
            <button className='bg-tertiary text-white font-semibold px-4 py-2 rounded-2xl'>Edit Profile</button>
            <button className='bg-gray-200 text-tertiary font-semibold px-4 py-2 rounded-2xl'>Settings</button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
        <h1 className='text-lg font-bold text-gray-500'>
          Your Models
        </h1>
        <div className="bg-gray-100 text-center font-semibold h-10 py-2  rounded-2xl">
            {user?.modelsbought.length} Model(s)
        </div>
        </div>
      </div>
      <div className="w-full  border-2 mx-auto border-gray-400"></div>
      <div className="flex py-4 flex-col ">
        <h1 className='font-semibold text-2xl'>Models Uploaded</h1>
        <div className="grid grid-cols-3  justify-items-center px-10 gap-4 w-full h-[20vh] mx-auto ">
          {user?.modelsuploaded.map((model, index)=>{
            return(
              <ModelsBoughtCard key={index} id={model.id} title={model.title} image={model.displayImage} category={model.category} />
            )
          })}
        </div>
      </div>
    </div>
          </div>
  )
}

export default ProfilePage