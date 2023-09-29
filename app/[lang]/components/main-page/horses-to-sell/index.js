import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import Button from "../../global-components/buttton";
import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "../../global-components/section-title";

export default async function HorsesToSell({ lang, hasTitle, hasTopPadding }) {
  const { horsesForSale } = await getDictionary(lang);

  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resHorsesToSell = await client.getEntries(
    { content_type: "horseForSale", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesToSellList = resHorsesToSell.items;

  return (
    <div className="relative w-full pb-10 lg:pb-0 mb-20">
      <section className={`container mx-auto pt-${hasTopPadding ? 32 : 6}`}>
        {hasTitle && <SectionTitle>{horsesForSale.title}</SectionTitle>}
        <div className="max-w-7xl my-10 pb-4 mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
          <div className="max-w-md">
            <MobileCard
              img={
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.image.fields.file.url
              }
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="p-4 pt-0">
              {
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.title
              }
            </h2>
            <h3 className="pl-4">
              {
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.subtitle
              }
            </h3>
            <div className="bg-white p-3 rounded-2xl">
              {documentToReactComponents(
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.content
              )}
            </div>
            <h3 className="p-4 pl-2">
              {horsesForSale.contact}: <span className="w-16" />
              <span className="text-smartOrange">
                {
                  horsesToSellList.filter(
                    (horseToSell) => horseToSell.fields.isHighlighted
                  )[0].fields.contact
                }
              </span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
