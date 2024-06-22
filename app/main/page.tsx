"use client"
import RightBar from '@/components/web/rightbar/rightbar'
import { LLM } from '@/types'
import React, { useEffect, useState } from 'react'



export default function BentoGridThirdDemo() {
    
  const [llmList, setllmList] = useState<LLM[]>([])
  useEffect(()=>{
    fetchLLMs()
  },[])
  const fetchLLMs = async () => {
    const res = await fetch("http://localhost:8000/model/getModels?page=1");
    const data = await res.json();
    console.log(data)
    setllmList([...llmList, ...data])
  }
  // bg-gradient-to-r from-orange-100 to-sky-400
  return (
    <div className='h-full bg-white overflow-y-hidden flex w-full '>
      <div className="w-3/4">
        helo
      </div>
      <RightBar/>
    </div>
  );
}
 


