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
            <h2 className="p-4">
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
            <div className="bg-white p-4 rounded-2xl mt-2">
              {documentToReactComponents(
                horsesToSellList.filter(
                  (horseToSell) => horseToSell.fields.isHighlighted
                )[0].fields.content
              )}
            </div>
            <h3 className="p-4">
              Contact us: <span className="w-10" />
              <span className="text-smartOrange">tel. 605 820 340</span>
            </h3>
            {/* <Button>Read more</Button> */}
          </div>
        </div>
      </section>
    </div>

    // <div className="w-full">
    //   <section className="container mx-auto pt-32">
    //     {hasTitle && <SectionTitle>{horsesForSale.title}</SectionTitle>}
    //     <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 py-20 mx-auto">
    //       <MobileCard
    //         img={
    //           horsesToSellList.filter(
    //             (horseToSell) => horseToSell.fields.isHighlighted
    //           )[0].fields.image.fields.file.url
    //         }
    //       />

    //       <div>
    //         <h2 className="pl-4 pb-2 text-4xl font-bold">
    //           {
    //             horsesToSellList.filter(
    //               (horseToSell) => horseToSell.fields.isHighlighted
    //             )[0].fields.title
    //           }
    //         </h2>
    //         <h3 className="pl-4 text-2xl">
    //           {
    //             horsesToSellList.filter(
    //               (horseToSell) => horseToSell.fields.isHighlighted
    //             )[0].fields.subtitle
    //           }
    //         </h3>
    //         <div className="bg-white p-4 rounded-2xl mt-4">
    //           <div>
    //             {documentToReactComponents(
    //               horsesToSellList.filter(
    //                 (horseToSell) => horseToSell.fields.isHighlighted
    //               )[0].fields.content
    //             )}
    //           </div>
    //         </div>
    //         <Button>Read more</Button>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
