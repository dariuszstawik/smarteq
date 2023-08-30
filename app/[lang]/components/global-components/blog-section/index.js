"use client";

import { useState } from "react";
import NewsCard from "../../main-page/news-section/news-card";

const BlogSection = ({ lang, content, isHomepage }) => {
  const [maxAmount, setMaxAmount] = useState(10);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 10);
  };

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
      <div className="min-w-96 max-w-[800px] mx-auto my-6 flex flex-col items-center">
        <h2>Latest blog posts</h2>
      </div>

      <ul className="grid grid-cols-1 gap-6 xl:grid-cols-3 mx-auto px-14">
        {blogList(isHomepage ? 3 : maxAmount)}
      </ul>
      <div className="flex justify-center m-16">
        {!isHomepage && maxAmount < content.length && (
          <button onClick={increaseMaxAmount}>{"Load more"}</button>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
