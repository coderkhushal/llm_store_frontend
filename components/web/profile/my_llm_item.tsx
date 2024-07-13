"use client"
import { getLLMById } from '@/actions/model'
import { LLM } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MyLLMItem = ({id}:{id: string}) => {
    const [myllm, setmyllm ] = useState<LLM | null>(null)
    useEffect(()=>{
        fetchllm()
    },[])
    const fetchllm = async () => {
        const data = await getLLMById(id)
        console.log(data)
        if(data){
            setmyllm(data)
        }

    }
  return (
    <Link href={`/main/llm/${id}`} className='flex w-full '>

    <div className='w-full flex border space-x-16 rounded-3xl p-5  items-center shadow-sm  font-semibold ' >
        
        <Image src={myllm?.displayImage ? myllm.displayImage:  "https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg"} width={100} height={100} alt="llm" className='rounded-2xl p-2' />
        <div className="flex w-full justify-around items-center">

        <div className="flex flex-col space-y-2 pb-3">
        
        <h1 className='text-3xl '>{myllm?.title} </h1>
        </div>
        <h1 className='font-bold text-gray-500 '>{myllm?.category}</h1>
        <h1 className='font-bold text-2xl text-gray-500 '>{myllm?.category}</h1>
        </div>
    </div>
    </Link>
  )
}

export default MyLLMItem