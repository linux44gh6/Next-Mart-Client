"use server"

import { cookies } from "next/headers"

export const createShop=async(data:FormData)=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`,{
            method:"POST",
            headers: {
                ...(await cookies()).get("accessToken")?.value && {
                    Authorization: (await cookies()).get("accessToken")?.value,
                },
            },
          body:data
        })
        const result=await res.json()
        return result
    }catch(error){
        console.log(error)
    }
}