"use client";
import { useRouter } from "next/navigation";
 
const Page = () => {
  const router = useRouter();
  router.push("/search");
  return (
    <div>
      <h1>This is Admin Panel</h1>
    </div>
  )
};

export default Page;
