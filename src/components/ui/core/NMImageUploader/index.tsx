
import { Input } from "../../input";

type TImageProps={
    imageFiles:File[]|[],
    setImageFiles:React.Dispatch<React.SetStateAction<File[]|[]>>,
    setImagePreview:React.Dispatch<React.SetStateAction<string[]|[]>>,
    label?:string,
    className?:string
}
const NMImageUploader = ({ setImageFiles,setImagePreview,label,className}:TImageProps) => {
    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const files=e.target.files![0]
        setImageFiles((prev)=>[...prev,files])
       if(files){
        const reader=new FileReader()
        reader.onload=()=>{
            setImagePreview((prev)=>[...prev,reader.result as string])
        }
        reader.readAsDataURL(files)
       }
       e.target.value=""
    }
    return (
        <div>
            <Input id="imageUploader" className="hidden" onChange={handelChange} type="file" multiple accept="image/*"/>
            <label className=" cursor-pointer w-30 h-20  border-2 border-dashed border-gray-500 p-4 flex justify-center items-center transition-all hover:bg-gray-100" htmlFor="imageUploader">{label}</label>
            {/* <div>
                {imagePreview.map((image,index)=><Image key={index} src={image} className="w-30 h-20" width={100} height={100} alt="image" />)}
            </div> */}
        </div>
    );
};

export default NMImageUploader;