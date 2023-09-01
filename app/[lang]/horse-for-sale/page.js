import React from "react";
import HorsesToSell from "../components/main-page/horses-to-sell";
import YoutubePlayer from "../components/horses-for-sale-page/youtube-player";
import Navbar from "../components/global-components/navbar";
import { getDictionary } from "@/lib/dictionary";
import HorsesForSaleHeader from "../components/horses-for-sale-page/horses-for-sale-header";
import ImageGallery from "../components/image-gallery";
import { client } from "@/lib/contentful/client";

async function getContentfulHorsesForSale(contentfulLang) {
  const resHorsesForSale = await client.getEntries(
    { content_type: "horseForSale", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesForSale = resHorsesForSale.items;

  return horsesForSale;
}

export default async function page({ params: { lang } }) {
  const { navigation, horsesForSale } = await getDictionary(lang);

  let contentfulLang;
  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const horsesForSaleContent = await getContentfulHorsesForSale(contentfulLang);

  // console.log("-------- horses for sale 654321--------");
  // console.log(horsesForSale);

  return (
    <div>
      <Navbar navigation={navigation} lang={lang} />
      <HorsesForSaleHeader lang={lang} />
      <HorsesToSell lang={lang} />
      {/* <YoutubePlayer /> */}
      <h2 className="m-6 lg:-mt-8 lg:pl-40 text-4xl font-semibold">
        {horsesForSale.title2}
      </h2>
      <ImageGallery lang={lang} content={horsesForSaleContent} />
    </div>
  );
}
