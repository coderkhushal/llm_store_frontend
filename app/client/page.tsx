"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
const ClientPage = () => {
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
        <div className='bg-gray-300 flex flex-col h-full w-full  items-center'>
            <h1 className='w-full text-center'>
                Welcome Client !
            </h1>

            <h2 className='w-full text-center'>

                Find best model for your work

            </h2>
            <Button onClick={()=>fetchSignedLink()} variant='outline'>
                Upload
            </Button>
            
            {
            <div className='w-1/2 flex justify-start space-x-2 items-center'>
                
                <Label htmlFor="picture">File</Label>
                <Input id="file" type="file" accept='.py' onChange={handleFileChange} />
            </div>
            }
        </div>
    )
}

export default ClientPage