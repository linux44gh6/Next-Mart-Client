import ManageCategories from "@/components/modules/Shop/Category";
import { getAllCategories } from "@/services/category";
const ProductCategoryPage = async () => {
  const { data,  } = await getAllCategories();
  return (
    <div>
      <ManageCategories categories={data} />
    </div>
  );
};

export default ProductCategoryPage;