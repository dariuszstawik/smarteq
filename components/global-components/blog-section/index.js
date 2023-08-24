"use client";
import NewsCard from "@/components/main-page/news-section/news-card";
import { useState } from "react";

const BlogSection = ({ content, isHomepage }) => {
  //   const { lang } = useContext(RootContext);

  const [maxAmount, setMaxAmount] = useState(10);

  const increaseMaxAmount = () => {
    setMaxAmount(maxAmount + 10);
  };

  let newsSectionHomepageTitle;
  let newsSectionTitle;

  //   newsSectionHomepageTitle = lang === "en" ? "News" : "Aktualności";

  //   newsSectionTitle =
  //     lang === "en"
  //       ? "News from the Futprints Foundation"
  //       : "Informacje i wydarzenia";

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
      {/* <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10"> */}
      {/* <div className="flex justify-center"> */}
      {/* <section className="grid grid-cols-1 gap-6 lg:grid-cols-3"> */}
      {/* <ul className="list-none grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2"> */}

      <ul className="grid grid-cols-1 gap-6 xl:grid-cols-3 mx-auto px-14">
        {blogList(isHomepage ? 3 : maxAmount)}
      </ul>
      <div className="flex justify-center m-16">
        {!isHomepage && maxAmount < content.length && (
          <button onClick={increaseMaxAmount}>{"Load more"}</button>
        )}
      </div>
    </div>
    // </div>
  );
};

export default BlogSection;
