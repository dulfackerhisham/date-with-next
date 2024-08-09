import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main Page</h1>
      <Link href="/blog"> Blog route</Link>
      <Link href="/blog/name"> Blog Name</Link>
    </main>
  );
}
