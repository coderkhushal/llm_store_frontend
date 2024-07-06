import { CategoryType } from '@/types'
import { Delete, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteDeployment } from '@/actions/model'

const ModelsBoughtCard = ({id, title, image , category}:{id: string, title: string, image: string, category: CategoryType}) => {
  const deleteModel  =async()=>{
    const data= await deleteDeployment(title, id)
    if(data.success){
      alert("Model deleted")
    }
    else{
      alert(data.msg)
    }
  }
  return (
    <div className='rounded-xl  p-2 lg:p-4 space-y-3   shadow-md bg-white     '>
    <Link href={`/main/llm/${id}`} className=' flex-col flex  pt-2 '>
  <img src="https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg" alt="llm" className='w-full rounded-xl h-1/2' />
  </Link>

  <h1 className='text-base lg:text-xl font-bold px-3 '>{title}</h1>
  <div className="flex justify-between items-center lg:px-1">

  <h1 className='text-xs lg:text-base text-gray-500  font-bold lg:px-2 '>{category}</h1>
  <AlertDialog>
      <AlertDialogTrigger asChild>
        
    <Trash2 size={24} className='text-red-500 cursor-pointer ' />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this LLM .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className='bg-red-500 hover:bg-red-600' onClick={deleteModel}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
  
    
</div>
  )
}

export default ModelsBoughtCard