import React from "react";
import Button from "../../global-components/buttton";
import { client } from "@/lib/contentful/client";
import HeaderSlider from "../../global-components/header-slider";
import Image from "next/image";

export default async function ExercisesHeader({ lang }) {
  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resExercisesHeader = await client.getEntries(
    { content_type: "exercisesHeader", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const exercisesHeader = resExercisesHeader.items[0];

  return (
    <section
      className=" bg-smartGray w-full  
      
      h-[720px] xl:h-[calc(100vh-112px)]
     
     flex flex-col xl:flex-row xl:overflow-hidden"
    >
      <div>
        <Image
          src="/asset-about2bg.svg"
          width="215"
          height="185"
          alt="asset"
          className="my-10 mb-2 ml-auto mr-14 w-32"
        />

        <div className="m-10 mt-2 flex flex-col gap-10 pl-4">
          <h1>
            {exercisesHeader.fields.title}
            <span className="text-smartOrange">
              {exercisesHeader.fields.titleSpan}
            </span>
          </h1>
          <p className="lg:text-lg text-left mt-0">
            {exercisesHeader.fields.headerContent}
          </p>
        </div>
      </div>

      <div className="w-3/5 h-screen shrink-0 object-cover hidden xl:block overflow-hidden">
        <HeaderSlider
          images={exercisesHeader.fields.slider}
          className="w-3/5 h-screen shrink-0 object-cover overflow-hidden"
        />
      </div>
    </section>
  );
}
