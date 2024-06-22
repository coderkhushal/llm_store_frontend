"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
type Category =  "CHATTING"|"PHARMACY"|"ECOMMERCE"|"TRADING"|"FITNESS"|"EDUCATION"|"OTHERS"
type detailsType = {
    title: string,
    category: Category,
    price: string,
    description: string,
    file: File | null

}

const SellerWork = () => {
    const [details, setdetails] = useState<detailsType>({
        title: '',
        category: "CHATTING",
        price: '',
        description: '',
        file: null
    })

    const UploadFile = async () => {
        const link = await fetchSignedLink()
        if (!link) {
            alert("url not found")
            return
        }
        if (!details.file) {
            alert("no file selected")
            return;
        }
        const formData = new FormData()
        formData.append('file', details.file)
        const response = await fetch(link.toString(), {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        })
        if (response.status === 200) {
            alert("uploaded successfully")
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setdetails({ ...details, file: file})
        }
    }
    const fetchSignedLink = async () => {
        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filename: details.title })
        })
        let data = await response.json()



        return data.url
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await UploadFile()
    }
    return (
        <div className='bg-zinc-950 text-white flex flex-col h-full w-full  items-center'>
            <h1 className='w-full text-5xl py-10 font-bold tracking-widest text-center'>
                Welcome Seller
            </h1>

            <h2 className='w-full text-center'>

                Upload your model to let others see what you have made

            </h2>
            <div className="bg-cream text-charcoal h-full font-sans leading-normal overflow-x-hidden lg:overflow-auto">
                <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
                    <section className="bg-cream-lighter p-4 shadow">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Model Details</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="md:flex mb-8">

                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                    <div className="mb-4">
                                        <label className="block uppercase tracking-wide text-xs font-bold">Model Title</label>
                                        <Input className="w-full shadow-inner text-black p-4 border-0" type="text" name="name" placeholder="my-llm" value={details.title} onChange={(e) => { setdetails({ ...details, title: e.target.value }); console.log(details) }} />
                                    </div>

                                    <div className="md:flex mb-4">
                                        <div className="md:flex-1 md:pr-3">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Category</label>
                                            <input className="w-full shadow-inner p-4 border-0" type="text" name="lon" placeholder="-99.1405168" />
                                        </div>
                                        <div className="md:flex-1 md:pl-3">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Price per Month</label>
                                            <input className="w-full shadow-inner p-4 border-0" type="text" name="lon" placeholder="-99.1405168" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-sm">Description</legend>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                    <textarea className="w-full shadow-inner p-4 border-0" placeholder="Describe your model " rows={6}></textarea>
                                </div>
                            </div>
                            {/* <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-sm">Cover Image</legend>
                                </div>
                                <div className="md:flex-1 px-3 text-center">
                                    <div className="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                                        <input className="opacity-0 absolute pin-x pin-y" type="file" name="cover_image"/>
                                            Add Cover Image
                                    </div>
                                </div>
                            </div> */}

                            <div className='w-1/2 flex justify-start space-x-2 items-center'>

                                <Label htmlFor="picture" >File</Label>
                                <Input id="file" type="file" accept='.py' className='bg-gray-400' onChange={handleFileChange} />
                            </div>
                            <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                                <div className="md:flex-1 px-3 text-center md:text-right">
                                    <input type="hidden" name="sponsor" value="0" />
                                    <Button className="button bg-gray-400 text-cream-lighter bg-brick hover:bg-brick-dark" type="submit" >
                                        Submit
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </section>
                </main>
            </div>




        </div>
    )
}

export default SellerWork