"use client"
import { LLM } from '@/types'
import React, { useRef } from 'react'
import HomeCard from '../home/home_card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScrollableModelsList = ({ llms}:{ llms?: LLM[]}) => {
  const scrollref = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    if (scrollref.current) {
      scrollref.current.scrollTo({
        left: scrollref.current.scrollLeft + 300, // Adjust the value as needed
        behavior: 'smooth'
      });; // Adjust the value as needed
    }
  };
  const scrollLeft = () => {
    if (scrollref.current) {
      scrollref.current.scrollTo({
        left: scrollref.current.scrollLeft - 300, // Adjust the value as needed
        behavior: 'smooth'
      });
      ; // Adjust the value as needed
    }
  };
  return (
    <div className="w-[95%] min-h-32 mx-auto h-full relative  ">
    <div ref={scrollref} className="flex no-scrollbar snap-x overflow-x-scroll lg:space-x-10 space-x-4 bg-gradient-to-b from-white to-gray-100   py-4 ">
      {(llms && llms.length>0)&& llms.map((llm, index) => {
        return <HomeCard key={index} llm={llm} />
      })}
       


      {/* Add more HomeCard components as needed */}
    </div>
    <Button  onClick={scrollLeft} className='absolute text-tertiary rounded-full -left-8 top-10 my-auto lg:top-20' variant={"outline"} ><ChevronLeft/></Button>
    <Button  onClick={scrollRight} className='absolute text-tertiary rounded-full -right-8 top-10 my-auto lg:top-20' variant={"outline"} ><ChevronRight/></Button>
  </div>
  )
}

export default ScrollableModelsList