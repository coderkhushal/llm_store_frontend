"use client"
import CardWrapper from '@/components/web/auth/card_wrapper'
import React, { use, useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginSchema } from '@/schemas/index'
import { set, z } from 'zod'
import { Button } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


import FormSuccess from '@/components/web/auth/form_success'
import FormError from '@/components/web/auth/form_error'


import { useRouter } from 'next/navigation'
import { login } from '@/actions/login'
import { getSetToken } from '@/hooks/getSetToken'
import { useAuthContext } from '@/context/AuthContext'

const LoginPage = () => {
    const {user, fetchUser } = useAuthContext()
    const router = useRouter()
    const [error, seterror] = useState<string | undefined>(undefined)
    const [success, setsuccess] = useState<string | undefined>(undefined)
    const [Pending, setPending] = useState(false)

    useEffect(()=>{
        if(user){
            router.push("/main")
        }
    },[user])


    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(values: z.infer<typeof LoginSchema>) {
        setsuccess("")
        seterror("")
        setPending(true)

        try {
            let result = await login({ email: values.email, password: values.password })
            getSetToken(result.token)
            await fetchUser()
            seterror(result.error)
            setsuccess(result.success)
            setPending(false)
            if (result.success) {
                router.push('/main')
            }

        }
        catch (err) {
            console.log(err)
            seterror(`Invalid Credentails`)
            setPending(false)
        }
    }
    return (
        <div className='h-full w-full bg-gradient-to-r from-blue-300 to-emerald-300 flex justify-center items-center'>
            <CardWrapper heading='Welcome back !' backbuttonhref='/auth/register' backbuttonlabel={`Don't have an account?`}>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8'
                    >
                        <FormField
                            disabled={Pending}
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='JohnDoe@example.com'
                                            disabled={Pending}
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField

                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='*****'
                                            type='password'
                                            disabled={Pending}
                                            {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        {/* <div className='w-full text-center text-base font-light my-0'>or continue with</div> */}
                        {/* <Link href={"/auth/forgetpass"} className='mt-1' >
                            <Button variant={"link"} className='text-orange-800'>
                                Forget Password?
                            </Button>
                        </Link> */}
                        {/* <Social /> */}
                        <Button type="submit" className='w-full bg-tertiary text-gray-100 hover:bg-sky-600' variant={"secondary"} disabled={Pending}>Submit </Button>


                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}

export default LoginPage