"use client"
import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";


        

//     return (
//         <div className='bg-gray-300 flex flex-col h-full w-full  items-center'>
//             <h1 className='w-full text-center'>
//                 Welcome Client !
//             </h1>

//             <h2 className='w-full text-center'>

//                 Find best model for your work

//             </h2>
//             <Button onClick={()=>fetchSignedLink()} variant='outline'>
//                 Upload
//             </Button>
            
//             {
//             <div className='w-1/2 flex justify-start space-x-2 items-center'>
                
//                 <Label htmlFor="picture">File</Label>
//                 <Input id="file" type="file" accept='.py' onChange={handleFileChange} />
//             </div>
//             }
//         </div>
//     )





export default function BentoGridThirdDemo() {
    
    const [show, setshow] = useState<boolean>(false)
    const [link, setlink]= useState<string | null>(null)
    const UploadFile= async (file: File) => {
        if(!link){
            alert("url not found")
            return
        }
        console.log(link)
        const formData = new FormData()
        formData.append('file', file)
        const response = await fetch(link.toString(), {
            method: 'PUT',
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        if(response.status === 200){
            alert("uploaded successfully")
        }
    }
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file){
            UploadFile(file)
        }
    }
    const fetchSignedLink = async()=>{
        const response = await fetch('http://localhost:8000/upload' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({filename: 'llm.py'})
        })
        let data= await response.json()
        console.log(data)
        setlink(value=>(data.url))
    }
  return (
    <main className='px-[24vh]'>
    <div className='flex gap-[54vh] mt-12 pb-32'>
        <div className='text-white text-xl font-bold items-center flex py-4 pl-16 '>LOGO</div>
        <div className=' flex justify-center items-center'><h1 className='text-white font-bold text-[8vh]'>Explore LLMs</h1></div>
    </div>
    <div className='flex'>
        <div className='w-1/6 pl-12 leading-8 fixed'>
        <h3 className='text-white text-bold'>CATEGORIES</h3>
        <h3 className='text-white/60 '>category 1</h3>
        <h3 className='text-white/60 '>category 2</h3>
        <h3 className='text-white/60 '>category 3</h3>
        <h3 className='text-white/60 '>category 4</h3>
        <h3 className='text-white/60 '>category 5</h3>
        </div>
    <div className='absolute left-1/3 h-full border-l px-12 '>

    <BentoGrid className=" max-w-4xl my-12  md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
    </div>
    </div>
    </main>
  );
}
 
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};


const items = [
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },{
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <h1 className='text-white font-bold'>$50</h1>,
  },
  
];
