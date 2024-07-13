"use client"
import { fetchSignedLink } from '@/actions/model'
import { updateProfilePictureMetadata, uploadProfilePictureUrl } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAuthContext } from '@/context/AuthContext'
import { CircleX } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

const UpdateProfileModal = ({ open, setopen }: { open: boolean, setopen: (x: boolean) => void }) => {
    const [loading, setloading  ] = React.useState(false)
    const {user} = useAuthContext()
    const updateProfile = async()=>{
        
        setloading(true)
        if(!user){
            toast.error("User not found")
            return;
        }
        if(!inputref.current?.files || !inputref.current?.files[0]){
            setloading(false)
            toast.error("No file selected")
            return;
        }
        const linkdata = await uploadProfilePictureUrl(inputref.current.files[0].name)
        if(!linkdata.success){
            setloading(false)
            toast.error("Error uploading file ")
            return;
        }
        const formdata = new FormData()
        formdata.append("file", inputref.current.files[0])
        const response = await fetch(linkdata.url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formdata
        })
        if(response.status !== 200){
            toast.error("Error uploading file")
            setloading(false)
            
        }

        const isprofileupdated = await updateProfilePictureMetadata(inputref.current.files[0].name, user?.id)
        if(isprofileupdated.success)
            {
                toast.success("Profile updated")

            }
            else{
                toast.error(isprofileupdated.msg)
            }
        setloading(false)
    }
    const inputref = React.useRef<HTMLInputElement>(null)
    return (
        <div className={`bg-white shadow-xl absolute w-5/6 h-5/6 p-10 ${open ? "flex" : "hidden"} z-50  flex-col`}>
            <div className="flex w-full justify-end">

                <CircleX className='cursor-pointer transition-all hover:scale-105' onClick={() => setopen(false)} />
            </div>
            <h1 className='text-3xl font-bold'>Update Profile</h1>
            <h1 className='text-lg font-semibold mt-4'> Profile Picture</h1>
            <div className="flex space-x-4 pb-4">

                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">.png .jpg .jpeg files</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" ref={inputref}  />
                </label>
            </div>
            <div className="flex w-full justify-center">

            <Button className='bg-tertiary w-1/5 hover:bg-sky-600' disabled={loading} onClick={updateProfile}>Submit</Button>
            </div>
        </div>
    )
}

export default UpdateProfileModal