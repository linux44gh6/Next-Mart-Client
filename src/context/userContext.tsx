import { getUserInfo } from "@/services/authServices";
import { TUser } from "@/Types";
import { createContext,  Dispatch,  SetStateAction,  useContext,  useEffect,  useState } from "react";

interface  IUserProviderValues{
    user:TUser|null
    isLoading:boolean
    setUser:(user:TUser|null)=>void
    setIsLoading:Dispatch<SetStateAction<boolean>>
}
const userContext=createContext<IUserProviderValues|undefined>(undefined)
const UserProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser]=useState<TUser|null>(null)
    const [isLoading,setIsLoading]=useState(false)
    const handelUse=async()=>{
        const currentUser = await getUserInfo() as TUser | null
        setUser(currentUser)
        setIsLoading(false)
    }
    useEffect(()=>{
        handelUse()
    },[isLoading])
    return (
        <userContext.Provider value={{user,isLoading,setUser,setIsLoading}}>
            {children}
        </userContext.Provider>
    );
};

export const useUser=()=>{
    const constext=useContext(userContext)
    if(!constext){
        throw new Error("useUser should be used within <UserProvider>")
    }
    return constext
}

export default UserProvider;