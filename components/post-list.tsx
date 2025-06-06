"use client";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import type {Post} from "@/types/post";
import Link from "next/link";
import {format} from "date-fns";

export default function PostList({
  posts,
  postsPerPage,
}: {
  posts: Omit<Post, "content">[];
  postsPerPage: number;
}) {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const page = searchParams.get("page") || "1";
    setCurrentPage(parseInt(page));
  }, [searchParams]);

  // Get paginated posts
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
        {paginatedPosts
        .map((post) => (
          <li className="relative w-fit space-y-6" key={post.slug}>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg">{post.title}</h2>
              <p>({format(post.createdAt, "yyyy/MM/dd")})</p>
            </div>
            <Link
              href={`/blog/${post.slug}/`}
              className="absolute inset-0"
            ></Link>
          </li>
        ))}
    </>
  );
}
