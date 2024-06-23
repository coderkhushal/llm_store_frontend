"use client"
import { getLLMById } from '@/actions/model'
import { LLM } from '@/types'
import React, { useEffect, useState } from 'react'

const SingleLLM = ({params}:{params: {id: string}}) => {
    const [llm, setLlm] = useState<LLM | null>(null)
    useEffect(()=>{
        fetchLLM()    
    }, [])
    const fetchLLM = async()=>{
        const data= await getLLMById(params.id)
        if(data){
            setLlm(data)
        }
    }
    if(!llm){
        return(
            <div className='flex justify-center items-center w-full h-full'>Loading</div>
        )
    }
  return (
    <div className="w-full flex flex-col justify-center items-center">

    <div className='w-full py-8  flex justify-between px-10 lg:pl-20'>
        <h1 className='font-bold text-3xl '>{llm.title}</h1>
        
        <div className="flex space-x-2">

        </div>
    </div>
    <div className="w-[92%] border-2"></div>
    </div>
  )
}

export default SingleLLM