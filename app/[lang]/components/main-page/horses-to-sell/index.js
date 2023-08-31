import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import Button from "../../global-components/buttton";
import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "../../global-components/section-title";

export default async function HorsesToSell({ lang, hasTitle }) {
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
    <div className="w-full">
      <section className="container mx-auto pt-32">
        {hasTitle && <SectionTitle>{horsesForSale.title}</SectionTitle>}
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 py-20 mx-auto">
          <MobileCard
            img={
              horsesToSellList.filter(
                (horseToSell) => horseToSell.fields.isHighlighted
              )[0].fields.image.fields.file.url
            }
          />

          <div>
            <h2 className="pl-4 pb-2 text-4xl font-bold">
              {
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.title
              }
            </h2>
            <h3 className="pl-4 text-2xl">
              {
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.subtitle
              }
            </h3>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>
                {documentToReactComponents(
                  horsesToSellList.filter(
                    (horseToSell) => horseToSell.fields.isHighlighted
                  )[0].fields.content
                )}
              </div>
            </div>
            <Button>Read more</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
