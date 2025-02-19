"use client"

import { useUser } from "@/context/userContext";


const HomePage = () => {
  const user=useUser()
  console.log(user);
  return (
    <div>
      <h1>Wellcom home page</h1>
    </div>
  );
};

export default HomePage;