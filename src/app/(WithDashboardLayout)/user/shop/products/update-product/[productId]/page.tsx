import UpdateProductForm from "@/components/modules/Shop/Product/UpdateProductForm";
import { getSingleProduct } from "@/services/products";


const UpdateProductPage = async({params}:{params:{productId:string}}) => {
    const {productId}=await params
    const product=await getSingleProduct(productId)
    return (
        <div className="flex justify-center items-center">
            <UpdateProductForm product={product}/>
        </div>
    );
};

export default UpdateProductPage;