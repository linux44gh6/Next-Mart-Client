import AllProducts from "@/components/modules/Products";
import ProductBanner from "@/components/modules/Products/Banner";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/products";
import { ICategory } from "@/Types/category";
import Link from "next/link";

const AllProductsPage = async () => {
    const {data:categories}=await getAllCategories()
    const { data: products } = await getAllProducts();
    return (
        <div>
            <NMContainer>
                <ProductBanner title="All Products" path="Home-Products"/>
            </NMContainer>

            <div className="container mx-auto my-20">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Featured Collection</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-8 my-5">
        {Array(6)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </div>
          <AllProducts products={products}/>
        </div>
    );
};

export default AllProductsPage;