'use client';
import { useState } from "react";
import { Button } from "../../button";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const PaginationTable = ({totalPage}:{totalPage:number}) => {
    const [page, setPage] = useState(1);
    const router=useRouter();
    const pathname=usePathname();
    const handlePrev=()=>{
        if(page>1){
            setPage(page-1)
           router.push(`${pathname}?page=${page-1}`)
        }
    }
    const handleNext=()=>{
        if(page<totalPage){
            setPage(page+1)
           router.push(`${pathname}?page=${page+1}`)
        }
    }
    return (
        <div className="flex justify-center gap-2 mt-10">
            <Button disabled={page===1} onClick={handlePrev} variant={'outline'} className="rounded-full">
                <ArrowLeft />
            </Button>
           {
                Array(totalPage).fill(0).map((_,idx)=>(
                     <Button key={idx} variant={page===idx+1?'default':'outline'} className="rounded-full" onClick={()=>{setPage(idx+1)
                        router.push(`${pathname}?page=${idx+1}`)
                     }}>
                          {idx+1}
                     </Button>
                ))
           }
            <Button disabled={page===totalPage} onClick={handleNext} variant={'outline'} className="rounded-full">
                <ArrowRight />
            </Button>
        </div>
    );
};

export default PaginationTable;