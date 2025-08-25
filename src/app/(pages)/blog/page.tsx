"use client";

import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import MotionWrapper from "@/app/_components/utilities/motionWrapper";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary";

export default function BlogPage() {
  return (
    <div className="w-full py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <MotionWrapper direction="up">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          Newsroom
        </h1>
      </MotionWrapper>

      {/* Highlight First Post */}
      {blogPosts[0] && (
        <MotionWrapper direction="up" delay={0.1}>
          <Link href={`/blog/${blogPosts[0].id}`}>
            <div className="rounded-xl overflow-hidden border h-[80vh] cursor-pointer">
              <div className="h-[80%] w-full">
                <Image
                  loader={cloudinaryLoader}
                  src={blogPosts[0].image}
                  alt={`image: ${blogPosts[0].title}`}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  // unoptimized
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {blogPosts[0].title}
                </h2>
                <p className="opacity-70">{blogPosts[0].excerpt}</p>
              </div>
            </div>
          </Link>
        </MotionWrapper>
      )}

      {/* Grid of other posts */}

      <MotionWrapper direction="up" delay={0.2}>
        <h2 className="text-3xl font-semibold mt-16 mb-8 text-center">
          Latest Articles
        </h2>
      </MotionWrapper>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {blogPosts.slice(1).map((post, i) => (
          <MotionWrapper key={post.id} direction="up" delay={i * 0.1}>
            <Link href={`/blog/${post.id}`}>
              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition h-[24em]">
                <div className="h-[60%] w-full">
                  <Image
                    loader={cloudinaryLoader}
                    src={post.image}
                    alt={`image: ${post.title}`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                    // unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm opacity-70">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
