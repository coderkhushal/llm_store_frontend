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