import ManageBrands from "@/components/modules/Shop/Brand";
import { getAllBrands } from "@/services/brand";

const BrandsPage =async () => {
    const {data,meta}=await getAllBrands();
    return (
        <div>
            <ManageBrands brands={data}/>
        </div>
    );
};

export default BrandsPage;