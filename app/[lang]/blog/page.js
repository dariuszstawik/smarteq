import { client } from "@/lib/contentful/client";
import React from "react";
import BlogSection from "../components/global-components/blog-section";
import Navbar from "../components/global-components/navbar";
import { getDictionary } from "@/lib/dictionary";
import PageHeader from "../components/global-components/page-header";

export default async function Blog({ params: { lang } }) {
  const { navigation } = await getDictionary(lang);

  let contentfulLang;
  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }
  const resBlogPosts = await client.getEntries(
    { content_type: "blogPost", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = resBlogPosts.items;

  return (
    <div>
      <Navbar navigation={navigation} lang={lang} />
      <PageHeader>Blog</PageHeader>
      <BlogSection content={blogPost} lang={lang} />
    </div>
  );
}
