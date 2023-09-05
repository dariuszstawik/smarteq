import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import SectionTitle from "../../global-components/section-title";
import { getDictionary } from "@/lib/dictionary";

export default async function AboutFirst({ about1, lang }) {
  const { aboutSection } = await getDictionary(lang);

  return (
    <div className="w-full" id="aboutSection">
      <section className="container mx-auto pt-32">
        <SectionTitle>{aboutSection.title}</SectionTitle>
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
          <div className="max-w-md">
            <img
              src="/asset-about1.svg"
              height="106px"
              alt="asset"
              className="ml-auto lg:translate-x-20"
            />
            <MobileCard img={about1.fields.image.fields.file.url} />
          </div>

          <div className="max-w-2xl">
            <div className="h-[106px] hidden lg:block" />
            <h2 className="p-4">{about1.fields.title}</h2>
            <div className="bg-white p-4 rounded-2xl mt-2">
              <div>{documentToReactComponents(about1.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
