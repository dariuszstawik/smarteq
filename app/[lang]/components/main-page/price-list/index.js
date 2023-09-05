import { getDictionary } from "@/lib/dictionary";
import React from "react";
import SectionTitle from "../../global-components/section-title";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function GraphicOffer({ lang }) {
  const { graphicOffer } = await getDictionary(lang);

  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resGraphicOfferItems = await client.getEntries(
    { content_type: "graphicOfferItems", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const graphicOfferItems = resGraphicOfferItems.items;

  const resGraphicOfferParagraph = await client.getEntries(
    { content_type: "graphicOfferParagraph", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const graphicOfferParagraph = resGraphicOfferParagraph.items[0];

  return (
    <div className="container mx-auto pt-[112px]" id="offer">
      <div>
        <SectionTitle>{graphicOffer.title}</SectionTitle>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mx-10 md:mx-32 place-content-center">
          <ul className="place-content-center">
            {graphicOfferItems.map((item, i) => (
              <li key={i}>
                <div className="sm:w-96 md:w-[600px] lg:w-[800px] mx-auto flex justify-start gap-4">
                  <div className="w-32 flex justify-end shrink-0">
                    <span className="inline-block text-right mr-2">
                      {item.fields.price ? item.fields.price : "INDV"}
                    </span>{" "}
                    <span className="Uppercase text-smartOrange">
                      {item.fields.price ? "PLN" : "PRICING"}
                    </span>{" "}
                  </div>
                  <span>{item.fields.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <img
            src="/contact-image.svg"
            className="md:w-[460px] mx-center"
            alt="contact-image"
          />
        </div>
      </div>

      <div className="max-w-[600px] mt-20 mx-10 md:mx-32 xl:mx-auto">
        {documentToReactComponents(graphicOfferParagraph.fields.content)}
      </div>
    </div>
  );
}
