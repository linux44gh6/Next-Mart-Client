import { z } from "zod";

 export const registerValidationSchema =z.object({
    name:z
    .string({required_error:"Name is required"})
    .min(2,"Name must be 2 to 20 characters")
    .max(20,"Name must be 2 to 20 characters"),
    email:z
    .string({required_error:"Email is required"})
    .email("Email is invalid"),
    password:z
    .string({required_error:"Password is required"})
    .min(6,"Password must be 6 to 20 characters")
    .max(20,"Password must be 6 to 20 characters"),
    confirmPassword:z
    .string({required_error:"Confirm Password is required"})
    .min(8,"Confirm Password must be 6 to 20 characters")
    .max(20,"Confirm Password must be 6 to 20 characters"),
})