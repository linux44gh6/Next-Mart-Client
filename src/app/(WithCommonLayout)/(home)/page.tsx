"use client"
import Hero from "@/components/modules/Home/HeroSection/Hero";
import { useUser } from "@/context/userContext";

const HomePage = () => {
  const user=useUser()
  console.log(user);
  return (
    <div>
      <Hero/>
    </div>
  );
};

export default HomePage;