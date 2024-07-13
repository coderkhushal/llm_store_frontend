"use client"
import { BuyLLM, getIpFromService, getLLMById } from '@/actions/model'
import { Button } from '@/components/ui/button'
import { useAuthContext } from '@/context/AuthContext'

import { LLM } from '@/types'
import { Copy, CopyIcon, PersonStanding } from 'lucide-react'
import Image from 'next/image'
import { toast } from "react-hot-toast"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const SingleLLM = ({ params }: { params: { id: string } }) => {
    const { user, fetchUser } = useAuthContext()
    const [isllmBought, setIsllmBought] = useState<boolean>(false)
    const [ModelIp, setModelIp] = useState<string | null>(null)
    const [llm, setLlm] = useState<LLM | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        fetchLLM()
    }, [user])
    const fetchLLM = async () => {
        if (!user) {
            await fetchUser()
        }
        if (user) {

            const data = await getLLMById(params.id)
            if (data) {
                setLlm(data)
            }
        }
    }
    const fetchIp = async () => {
        setModelIp(null)
        setIsLoading(true)
        if (!llm?.title) {
            toast("Please wait for model to load")
            return;
        }
        const data = await getIpFromService(llm?.title, params.id)
        if (data.success) {
            setModelIp(data.ip)
        }
        else {
            toast("Please wait for model to load", {
                icon: '🖐️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',

                }
            })
        }
        setIsLoading(false)
    }
    const buyLLM = async () => {
        const data = await BuyLLM(params.id)

        if (data.success) {
            setIsllmBought(true)
        }
    }
    if (!llm) {
        return (
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
            <div className="flex flex-col w-5/6  py-10">
                <div className="flex w-full  ">

                    <Image src={llm.modelImage ? llm.modelImage : "https://cdn.pixabay.com/photo/2023/11/29/22/14/ai-8420370_960_720.jpg"} width={400} height={400} alt={llm.title} className='rounded-3xl h-[30vh]' />
                    <div className="flex pl-32 py-5 w-full  p-5 rounded-3xl space-y-2 flex-col">
                        <h1 className='font-bold text-5xl'>{llm.title}</h1>
                        <h1 className=' font-semibold text-gray-500 text-xl'>{llm.category}</h1>

                        <div className="h-44 justify-center space-y-2 flex flex-col">
                            <div className="flex items-center">

                                {ModelIp && <h1 className='font-semibold text-lg w-56 py-1 text-center rounded-xl     bg-gray-100 '>ip: {`${ModelIp}`}</h1>}
                                {ModelIp && <Copy className=' cursor-pointer mx-2 ' onClick={() => { navigator.clipboard.writeText(ModelIp) }} />}
                            </div>
                            {ModelIp && <h1 className='font-semibold text-gray-500 text-lg  py-1     overflow-y-auto  '>

                                Manually type
                            </h1>}
                            {ModelIp && <h1 className='font-semibold text-gray-500 text-lg '>  <b> http://the_ip_of_model:5000/your_expected_route</b> </h1>}
                            {ModelIp && <h1 className='font-semibold text-gray-500 text-lg    '>

                                eg: http://1.2.3.4:5000/testing
                            </h1>}
                            {isLoading && <h1 className='font-semibold text-lg w-56 py-1 text-center rounded-xl   overflow-y-auto bg-gray-100 '>Loading</h1>}
                        </div>

                        <div className="flex space-x-4">


                            {((user?.modelsbought.findIndex((e) => e.modelId == llm.id) != -1) || isllmBought) ?
                                <div className=' font-semibold  flex items-center justify-center bg-gray-200 rounded-2xl px-4 py-2 '>Owned</div>
                                :
                                <button className='bg-tertiary text-white font-semibold px-4 py-2 rounded-2xl' onClick={buyLLM}>Get Free</button>

                            }
                            {((user?.modelsbought.findIndex((e) => e.modelId == llm.id) != -1) || isllmBought) &&
                                <Button className='font-semibold hover:bg-sky-600 bg-tertiary' onClick={fetchIp}>
                                    {ModelIp ? "Refresh Ip" : "Get Model Ip"}
                                </Button>
                            }
                        </div>
                        
                        <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown>
                        


                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleLLM