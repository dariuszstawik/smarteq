import React from "react";
import Button from "../../global-components/buttton";
import { client } from "@/lib/contentful/client";
import HeaderSlider from "../../global-components/header-slider";

export default async function HorsesForSaleHeader({ lang }) {
  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resHorsesForSaleHeader = await client.getEntries(
    { content_type: "horsesForSaleHeader", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesForSaleHeader = resHorsesForSaleHeader.items[0];

  return (
    <section
      className=" bg-smartGray w-full  
      
      h-[calc(100vh-112px)]
     
    mb-28 flex flex-col xl:flex-row xl:overflow-hidden"
    >
      <div>
        <img
          src="/asset-about2bg.svg"
          alt="asset"
          className="my-10 mb-6 ml-auto mr-14 w-32"
        />

        <div className="m-10 mt-4 flex flex-col gap-10 text-center">
          <h1>
            {horsesForSaleHeader.fields.title}
            <span className="text-smartOrange">
              {horsesForSaleHeader.fields.titleSpan}
            </span>
          </h1>
          <h3>{horsesForSaleHeader.fields.headerContent}</h3>
          <Button className="mx-auto mt-2">Check my e-books</Button>
        </div>
      </div>

      <div className="w-3/5 h-screen shrink-0 object-cover hidden xl:block overflow-hidden">
        <HeaderSlider
          images={horsesForSaleHeader.fields.slider}
          className="w-3/5 h-screen shrink-0 object-cover overflow-hidden"
        />
      </div>
    </section>
  );
}
