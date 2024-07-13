"use client"
import MyLLMItem from '@/components/web/profile/my_llm_item'
import TopBar from '@/components/web/topbar/topbar'
import { useAuthContext } from '@/context/AuthContext'
import Image from 'next/image'
import React, { useEffect } from 'react'

const MyLlmPage = () => {
    const {user , fetchUser} = useAuthContext()
    useEffect(()=>{
        if(!user){
            fetchUser()
        }
    },[user])
    if(!user){
        return (
          <div className='h-full w-full flex flex-col  '>
             <TopBar lgTitle="My LLMs"  showSearchBar={false}  />
             <div className="flex justify-center items-center w-full h-full">

             <Image src="/assets/loading.gif" width={100} height={100} alt="loading" />
             </div>
          </div>
        )
      
    }
  return (
    <div className="flex flex-col w-full h-full ">
    <TopBar lgTitle="My LLMs"  showSearchBar={false}  />
    <div className='h-full bg-white overflow-y-hidden  flex w-full '>
      <div className="w-full lg:w-5/6 flex flex-col mx-auto py-10 h-[85vh] items-center overflow-y-auto">
        {user.modelsbought.map((e, index)=> <MyLLMItem key={index} id={e.modelId}/>)}
        {user.modelsbought.length === 0 && <h1 className='text-2xl font-bold text-gray-500'>No LLMs bought yet</h1>}
      </div>
      </div>
      </div>
  )
}

export default MyLlmPage