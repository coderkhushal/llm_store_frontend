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