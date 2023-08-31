// "use client";
import { getDictionary } from "@/lib/dictionary";
import NewsCard from "../../main-page/news-section/news-card";
import SectionTitle from "../section-title";

export default async function BlogSectionHome({ lang, content }) {
  const { blogSection } = await getDictionary(lang);

  const blogList = (newsAmount) => {
    return (
      content &&
      content.slice(0, newsAmount).map((item, i) => {
        return (
          <li key={i} className="mx-auto">
            <NewsCard
              title={item.fields.title}
              lead={item.fields.lead}
              slug={item.fields.slug}
              img={item.fields.image ? item.fields.image : ""}
              lang={lang}
            />{" "}
          </li>
        );
      })
    );
  };

  return (
    <div className="container mx-auto">
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center pt-20">
        <SectionTitle>{blogSection.title}</SectionTitle>
      </div>

      <ul className="grid grid-cols-1 gap-6 xl:grid-cols-3 mx-auto px-14">
        {blogList(3)}
      </ul>
    </div>
  );
}
