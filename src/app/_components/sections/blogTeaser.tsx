import React from "react";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary";

const BlogTeaser = () => {
  // Get only the first 3 posts
  const teaserPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center lg:mb-20 mb-14 ">
          <h2 className="lg:text-[3.5rem] text-[2rem] font-bold ">
            From Our Blog
          </h2>
          <p className="mt-5 ">
            Insights and expertise on AI, localization, and translation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {teaserPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="shadow-border rounded-xl p-6 overflow-hidden shadow hover:shadow-lg transition">
                {/* Image */}
                {post.image && (
                  <div className="h-[60%] w-full rounded-xl overflow-hidden mb-4">
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
                )}

                {/* Content */}
                <div className="">
                  <h3 className="text-xl font-semibold  mb-2">{post.title}</h3>
                  <p className=" text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm ">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
