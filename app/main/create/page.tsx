"use client"
import { CreateModel, fetchSignedLink } from '@/actions/model'
import fs from 'fs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { categories } from '@/constants'
import { useAuthContext } from '@/context/AuthContext'
import { CategoryType, LLM } from '@/types'
import React, { useRef, useState } from 'react'

const CreationPage = () => {
    const { user, fetchUser } = useAuthContext()

    const inputref = useRef<HTMLInputElement>(null)
    const [details, setdetails] = useState<Pick<LLM, "title" | "category" | "costPerMonth" | "content">>({
        title: "",
        category: "EDUCATION",
        costPerMonth: 0,
        content: ""
    })

    const UploadFile = async () => {
        if (details.title == "") {
            alert("title is required")
            return false;
        }
        const link = await fetchSignedLink(details.title)
        if (!link) {
            alert("url not found")
            return false;
        }
        if (!inputref.current?.files || !inputref.current?.files[0]) {
            alert("no file selected")
            return false;
        }
        // save file 
        const reader = new FileReader()
        reader.onload = async (event) => {
            const filecontent= event.target?.result

            const response = await fetch(link.toString(), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: filecontent
            })
            if (response.status === 200) {
                return true;
            }
        }
        reader.readAsArrayBuffer(inputref.current.files[0])
        return true;
    }



    const handleSubmit = async () => {
        if (inputref.current?.files) {

            let isUploaded = await UploadFile()
            if (isUploaded) {
                let res = await CreateModel(details)
                if (res.success) {
                    alert("Model Created Successfully")
                }
                else {
                    alert("Model Creation Failed")
                }
            }

        }
        else {
            alert("Please upload a file")
        }
    }
    return (
        <div className='flex flex-col w-full h-full pt-14 bg-white'>

            <h1 className='font-semibold text-3xl mb-14 w-5/6 mx-auto '>Create Personalised LLM</h1>
            <div className="flex w-5/6 mx-auto flex-col">

                <div className="flex w-full mx-auto ">
                    <div className="flex flex-col w-2/5">

                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">.py file</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" ref={inputref} accept='.py' />
                        </label>
                        <h1 className='font-semibold text-2xl text-gray-400 my-4'>Upload Your Langchain Flask / Fastapi app accepting Open AI key as HTTP request headers  </h1>
                    </div>

                    <div className="flex flex-col space-y-8  w-1/3 mx-auto ">
                        <div className="flex flex-col space-y-2">

                            <Label className='text-xl font-semibold '>Model Title</Label>
                            <Input className=' w-full mx-auto border-black' placeholder='my-llm' value={details.title} onChange={(e) => { setdetails({ ...details, title: e.target.value }) }}></Input>
                            <div className=' text-gray-500'>title should only include lowercase alphabets </div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex flex-col space-y-2">

                                <Label className='text-xl font-semibold  '>Category</Label>
                                <Select defaultValue='EDUCATION' onValueChange={(e) => setdetails({ ...details, category: e as CategoryType })}>
                                    <SelectTrigger className="w-[180px] border-black">
                                        <SelectValue placeholder="EDUCATION" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category, index) => (
                                            <SelectItem key={index} value={category.name}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>

                                </Select>
                            </div>
                            <div className="flex flex-col space-y-2">

                                <Label className='text-xl font-semibold '>Price per Month ($)</Label>
                                <Input type="number" className=' w-full mx-auto border-black ' placeholder='10' value={details.costPerMonth} onChange={(e) => { if (Number.parseInt(e.target.value) >= 0) setdetails({ ...details, costPerMonth: Number.parseInt(e.target.value) }) }}></Input>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-2">

                            <Label className='text-xl font-semibold  '>Description</Label>
                            <Textarea className=' w-full mx-auto border-black h-32 resize-none' value={details.content} onChange={(e) => { console.log(details); setdetails({ ...details, content: e.target.value }) }}></Textarea>
                        </div>
                        <Button onClick={handleSubmit} className=' bg-tertiary hover:bg-sky-600'>Create</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CreationPage