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
    <div className="container mx-auto pt-[112px]" id="graphicOffer">
      <div>
        <SectionTitle>{graphicOffer.title}</SectionTitle>

        <div className="mx-10 md:mx-28 ">
          <ul>
            <img
              src="/contact-image.svg"
              className="md:w-[400px] float-right hidden xl:block"
              alt="contact-image"
            />
            {graphicOfferItems.map((item, i) => (
              <li key={i}>
                <div className=" mx-auto flex justify-start gap-4 my-2">
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
            className="md:w-[400px] xl:hidden"
            alt="contact-image"
          />
        </div>
      </div>

      <div className="mt-10 mx-10 md:mx-32">
        {documentToReactComponents(graphicOfferParagraph.fields.content)}
      </div>
    </div>
  );
}
