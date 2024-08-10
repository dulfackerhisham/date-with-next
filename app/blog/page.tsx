"use client"
import { useRouter } from "next/navigation";

const Page = () => {
  
  const router = useRouter();

  const back = () => {
    router.push("/")
  }

  return (
    <div className="text-center blog-page">
        <h1>Welcome to my Blog</h1>

        <button onClick={back} className="bg-blue-500 p-4 text-white roumded mt-11">Back</button>

    </div>
  )
}

export default Page;