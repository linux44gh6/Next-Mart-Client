
import CategoryPage from "@/components/modules/Home/Category";
import FeaturedProduct from "@/components/modules/Home/FeaturedProduct";
import FlasSale from "@/components/modules/Home/FlaseSale";
import Hero from "@/components/modules/Home/HeroSection/Hero";
import TopBrands from "@/components/modules/Home/TopBrands/TopBrands";
const HomePage = async() => {
  return (
    <div>
      <Hero/>
      <CategoryPage/>
      <FeaturedProduct/>
      <FlasSale/>
      <TopBrands/>
    </div>
  );
};

export default HomePage;