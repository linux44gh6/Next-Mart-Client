'use client'
import Logo from "@/app/assets/svgs/logo";
import { Button } from "@/components/ui/button";
import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage,  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {  FieldValues, SubmitHandler, useForm,  } from "react-hook-form";
import { registerValidationSchema } from "./registerValidation";
import { userRegister } from "@/services/authServices";
import { toast } from "sonner";

const RegisterForm = () => {
    const form=useForm({
        resolver:zodResolver(registerValidationSchema)
    })
    const {formState:{isSubmitting}}=form
    const password=form.watch('password')
    const confirmPassword=form.watch('confirmPassword')
    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
        try{
        const res= await userRegister(data)
        if(res?.success){
       toast.success(res?.message)
        }else{
            toast.error(res?.message)
        }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className=" w-[33%] border border-gray-400 rounded-lg  p-5">
            <div className="flex">
                <Logo/>
                <div className="">
                    <h1 className="text-3xl font-bold text-center">Register</h1>
                    <p className="text-gray-500 clear-start text-center">Join us today and start you journey</p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value||''} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value||''} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password </FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" value={field.value||''} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password </FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" value={field.value||''} />
                                </FormControl>
                                {confirmPassword&&password&&confirmPassword!==password&&(
                                    <FormMessage>Passwords do not match</FormMessage>
                                )
                                }
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button disabled={!!(confirmPassword && confirmPassword !== password)} className="w-full" type="submit">
                        {isSubmitting?"Registering...":"Register"}
                    </Button>
                    <p className="text-center font-semibold text-gray-600">Already have an account?<Link className="text-purple-700" href={'/login'}>Login</Link></p>
                </form>
            </Form>
        </div>
    );
};

export default RegisterForm;