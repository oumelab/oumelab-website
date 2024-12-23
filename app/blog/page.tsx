import { getAllPosts } from "@/data/post";
import Link from "next/link";

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className="font-bold text-2xl">記事一覧</h1>

      <ul className="mt-5 space-y-2 list-disc">
        {posts.map((post) => (
          <li className="relative" key={post.slug}>
            <div className="flex items-center gap-2">
            <h2>{post.title}</h2>
            <p>{post.createdAt}</p>
            </div>
            <Link href={`/blog/${post.slug}/`} className="absolute inset-0"></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}