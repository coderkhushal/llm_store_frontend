import { getGetAuthHeaders } from "@/hooks/getAuthHeaders";
import { UserType } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getUserByToken = async ({ token }: { token: string }) => {
    try {
        const res = await fetch(`${BASE_URL}/onboard/auth/getUserDetails`, {
            method: "GET",
            headers: getGetAuthHeaders()

        })
        const data : UserType = await res.json()
        if(res.status==200){
            return data;
        }
        else{
            return null;
        }
    }
    catch (err) {
        console.log(err)
        return null;
    }
}


export  const uploadProfilePictureUrl= async(filename :string)=>{
    try{
        const res = await fetch(`${BASE_URL}/onboard/auth/uploadProfilePicture`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify({filename })
        })
        const data = await res.json()
        if(res.status==200){
            return {success: true, url: data.url};
        }
        else{
            return {success: false, msg: data.msg};
        }
    }
    catch(err){
        console.log(err)
        return {success: false, msg: "Internal Server Error"};
    }
}
export const updateProfilePictureMetadata= async(filename: string, userId: string)=>{
    try{
        const res = await fetch(`${BASE_URL}onboard/auth/updateProfileMetadata`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify({userId,  filename })
        })
        const data = await res.json()
        if(res.status==200){
            return {success: true, msg: data.msg};
        }
        else{
            return {success: false, msg: data.msg};
        }
    }
    catch(err){
        console.log(err)
        return {success: false, msg: "Internal Server Error"};
    }
}