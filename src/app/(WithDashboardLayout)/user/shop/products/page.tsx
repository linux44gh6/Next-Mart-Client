import ManageProducts from "@/components/modules/Shop/Product";
import { getAllProducts } from "@/services/products";

const ProductPage = async() => {
    const {data,meta}=await getAllProducts();
    return (
        <div className="">
            <ManageProducts products={data}/>
        </div>
    );
};

export default ProductPage;