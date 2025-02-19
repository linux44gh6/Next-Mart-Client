'use server'
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"
import { jwtDecode } from "jwt-decode";
export const userRegister=async(userData:FieldValues)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    const result=await res.json()
    console.log(result);
    if(result?.success){
        (await cookies()).set("accessToken",result?.data.accessToken)
    }
    return result
}
export const userLogin=async(userData:FieldValues)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    const result=await res.json()
    console.log(result);
    if(result?.success){
        (await cookies()).set("accessToken",result?.data.accessToken)
    }
    return result
}

export const verifyReCaptchaToken=async(token:string)=>{
   try{
    const res=await fetch('https://www.google.com/recaptcha/api/siteverify',{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:new URLSearchParams({
            secret:process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY as string,
            response:token
        })
    })
    return await res.json()
   }catch(error){
    console.log(error);
   }
}

export const logout=async()=>{
    (await cookies()).delete("accessToken")
}
export const getUserInfo=async()=>{
    const user=(await cookies()).get("accessToken")?.value
    if(user){
        const decodedUser=jwtDecode(user)
        return decodedUser
    }
    return null
}