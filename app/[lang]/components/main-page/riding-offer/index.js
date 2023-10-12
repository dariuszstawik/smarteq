import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "../../global-components/section-title";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function RidingOffer({ lang }) {
  const { ridingOffer } = await getDictionary(lang);

  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resRidingOfferItems = await client.getEntries(
    { content_type: "equestrianOfferItems", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const ridingOfferItems = resRidingOfferItems.items;

  const resRidingOfferParagraph = await client.getEntries(
    { content_type: "ridingOfferParagraph", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const ridingOfferParagraph = resRidingOfferParagraph.items[0];

  return (
    <div className="container mx-auto pt-[112px]" id="ridingOffer">
      <div>
        <SectionTitle>{ridingOffer.title}</SectionTitle>

        <div className="mx-10 md:mx-28 ">
          <ul>
            <Image
              src="horse-jumping.svg"
              width="352"
              height="292"
              alt="horse jumping"
              className="md:w-[300px] float-right hidden xl:block"
            />
            {ridingOfferItems.map((item, i) => (
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
          <Image
            src="horse-jumping.svg"
            width="352"
            height="292"
            alt="horse jumping"
            className="md:w-[300px] xl:hidden"
          />
        </div>
      </div>

      <div className="mt-10 mx-10 md:mx-32">
        {documentToReactComponents(ridingOfferParagraph.fields.content)}
      </div>
    </div>
  );
}
