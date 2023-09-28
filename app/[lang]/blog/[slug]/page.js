import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SingleArticle from "../../components/global-components/single-article";
import Navbar from "../../components/global-components/navbar";
import { getDictionary } from "@/lib/dictionary";
import PageHeader from "../../components/global-components/page-header";

async function getContentfulBlogPosts(contentfulLang, slug) {
  const blogPosts = await client.getEntries(
    { content_type: "blogPost", "fields.slug": slug, locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = blogPosts.items[0];
  return blogPost;
}

export default async function BlogPost({ params }) {
  const { navigation } = await getDictionary(params.lang);

  const slug = params.slug;

  let contentfulLang;
  if (params.lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const blogPost = await getContentfulBlogPosts(contentfulLang, slug);

  return (
    <div>
      <Navbar navigation={navigation} lang={params.lang} />
      <PageHeader>Blog</PageHeader>
      <SingleArticle
        title={blogPost.fields.title}
        lead={blogPost.fields.lead}
        content={blogPost.fields.content}
        img={blogPost.fields.image ? blogPost.fields.image : ""}
      ></SingleArticle>
    </div>
  );
}
