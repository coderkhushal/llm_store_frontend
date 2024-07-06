import { getGetAuthHeaders } from "@/hooks/getAuthHeaders";
import { LLM } from "@/types";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getModelsPaginated= async (page:number):Promise<LLM[] | null>=>{
    try{
        const res = await fetch(`${BASE_URL}/model/getModels?page=${page}`);
        const data = await res.json();   
        return data;
    }
    catch(err){
        console.log(err)
        return null;
    }
}
export const getTrendingModels= async ():Promise<LLM[] | null>=>{
    try{
        const res = await fetch(`${BASE_URL}/model/getTrendingModels`);
        const data = await res.json();
        console.log(data)   
        if(data.success && res.status===200){
            return data.models;
        }
        return null;
    }
    catch(err){
        console.log(err)
        return null;
    }
}
export const getLLMById= async (id:string):Promise<LLM | null>=>{
    try{
        const res = await fetch(`${BASE_URL}/model/getModelById?modelId=${id}`);
        const data = await res.json();   
        if(res.status===200){
            return data;
        }
        return null;
    }
    catch(err){
        console.log(err)
        return null;
    }
}

export const BuyLLM = async (modelId:string):Promise<{success: boolean, msg: string}>=>{
    try{
        const res = await fetch(`${BASE_URL}/model/auth/buyModel`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify({modelId})
        });
        const data = await res.json();   
        if(res.status===200){
            return {success: true, msg:data.msg}
        }
        return {success: false, msg:data.msg}
        
    }
    catch(err){
        console.log(err)
        return {success: false, msg:"Internal Server Error"}
        
    }
}
export const fetchSignedLink = async (title: string) => {
    const response = await fetch(`${BASE_URL}/seller/auth/upload`, {
        method: 'POST',
        headers: getGetAuthHeaders(),
        body: JSON.stringify({ filename: title })
    })
    let data = await response.json()

    console.log(data)


    return data.url
}


export const CreateModel = async(data : Pick<LLM, "title" | "category" | "costPerMonth" | "content">)=>{
    try{
        const res = await fetch(`${BASE_URL}/model/auth/CreateModel`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify(data)
        });
        const response = await res.json();
        if(res.status===200){
            return {success: true, msg: response.msg}
        }
        return {success: false, msg: response.msg}
    }
    catch(err){
        console.log(err)
        return {success: false, msg: "Internal Server Error"}
    }
}

export const getIpFromService = async (modelName: string, modelId: string) => {
    try{
        const response = await fetch(`${BASE_URL}/model/auth/getIpFromService`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify({modelName: modelName, modelId: modelId})
        })
        const data = await response.json()
        if(response.status===200){
            return {success: true, ip: data.ip}
        }
        return {success: false, msg: data.msg}
    }
    catch(err){
        console.log(err)
        return {success: false, msg:"Internal Server Error"}
    }
}


export const deleteDeployment = async (filename: string, modelId: string) => {
    try{
        const response = await fetch(`${BASE_URL}/model/auth/deleteDeployment`, {
            method: "POST",
            headers: getGetAuthHeaders(),
            body: JSON.stringify({filename: filename, modelId: modelId})
        })
        const data = await response.json()
        if(response.status===200){
            return {success: true, msg: data.msg}
        }
        return {success: false, msg: data.msg}
    }
    catch(err){
        console.log(err)
        return {success: false, msg:"Internal Server Error"}
    }
}