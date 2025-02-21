"use server";

import { NextRequest, NextResponse } from "next/server";
import { getUserInfo } from "./services/authServices";
 type Role=keyof typeof roleBasedPrivetRoute
const authRoutes = ["/login", "/register"];
const roleBasedPrivetRoute={
    user:[/^\/user/],
    admin:[/^\/admin/],
}
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  
  // Pass the request if getUserInfo requires cookies/headers
  const userInfo = await getUserInfo();
console.log(userInfo);
  // If user is not authenticated
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // Use a relative URL for redirecting if possible
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url)
      );
    }
  }

  if(userInfo?.role &&roleBasedPrivetRoute[userInfo?.role as Role]){
 const routes=roleBasedPrivetRoute[userInfo?.role as Role];
 if(routes.some((route) => pathname.match(route))){
     return NextResponse.next();
 }
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/login",
     "/create-shop",
     "/user",
     "/user/:path",
     "/admin",
     "/admin/:path"
    ], 
};
