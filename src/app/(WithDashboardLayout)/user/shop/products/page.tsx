import ManageProducts from "@/components/modules/Shop/Product";
import { getAllProducts } from "@/services/products";

const ProductPage = async({searchParams}:{searchParams:Promise<{page:number,limit:number,search:string,category:string,sort:string}>
}) => {
   const {page}=(await searchParams);
    const {data,meta}=await getAllProducts(page);
    return (
        <div className="">
            <ManageProducts products={data} meta={meta}/>
        </div>
    );
};

export default ProductPage;