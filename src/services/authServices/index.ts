'use server'
import { FieldValues } from "react-hook-form"
export const userRegister=async(userData:FieldValues)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    return res.json()
}
export const userLogin=async(userData:FieldValues)=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
    })
    return res.json()
}