"use client"
import Logo from "@/app/assets/svgs/logo";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

import { logout } from "@/services/authServices";
import { useUser } from "@/context/userContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constans";

export default function Navbar() {
  const pathname = usePathname();
  const router=useRouter()
  const {user,setIsLoading }=useUser()
  const handelLogout = () => {
    logout()
    setIsLoading(true)
    if(protectedRoutes.some((route)=>route===pathname)){
      router.push('/')
    }
  }
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          Next Mart
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href={'/cart'}>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button></Link>
         { user?  <div className="flex gap-2 items-center">
         <Link href={'/create-shop'}>
         <Button variant={'outline'} className=" rounded-full">Crete Shop</Button></Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuLabel >My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer"><Link href={`/${user?.role}/dashboard`}>Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">My Shop</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handelLogout}>
                <LogOut />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

         </div>:<Link href={'/login'}>
          <Button variant={'outline'} className=" rounded-full">Login</Button>
          </Link>

       
         
        }
        </nav>
      </div>
    </header>
  );
}