"use client"
import { useRouter } from "next/navigation";

const Bmw = () => {

  const router = useRouter();

  const back = () => {
    router.push("/blog")
  }
  return (
    <div className="bg-blue-400 text-center p-6">
        <h1>page BMW</h1>
        <button onClick={back} className="bg-red-500 p-4 text-white roumded mt-11">Back</button>
    </div>
  )
}

export default Bmw;