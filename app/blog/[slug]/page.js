import SingleArticle from "@/components/global-components/single-article";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function BlogPost({ params }) {
  const slug = params.slug;

  const blogPosts = await client.getEntries(
    { content_type: "blogPost", "fields.slug": slug },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = blogPosts.items[0];

  return (
    <div>
      <SingleArticle
        title={blogPost.fields.title}
        lead={blogPost.fields.lead}
        content={documentToReactComponents(blogPost.fields.content)}
        img={blogPost.fields.image ? blogPost.fields.image : ""}
      ></SingleArticle>
      {/* <h1>{slug}</h1>
      <h1>{blogPost.fields.title}</h1>
      <h2>{blogPost.fields.lead}</h2>
      <div>{documentToReactComponents(blogPost.fields.content)}</div> */}
    </div>
  );
}
