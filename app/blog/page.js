import BlogSection from "@/components/global-components/blog-section";
import { client } from "@/lib/contentful/client";
import React from "react";

export default async function Blog() {
  const resBlogPosts = await client.getEntries(
    { content_type: "blogPost" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = resBlogPosts.items;

  return (
    <div>
      <BlogSection content={blogPost} />
    </div>
  );
}
