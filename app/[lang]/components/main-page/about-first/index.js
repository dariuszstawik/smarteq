import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import SectionTitle from "../../global-components/section-title";
import { getDictionary } from "@/lib/dictionary";

export default async function AboutFirst({ about1, lang }) {
  const { aboutSection } = await getDictionary(lang);

  return (
    <div className="w-full" id="aboutSection">
      <section className="container mx-auto pt-40">
        <SectionTitle>{aboutSection.title}</SectionTitle>
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 py-20 mx-auto">
          <div className="max-w-[400px] -translate-y-[105px]">
            <img
              src="/asset-about1.svg"
              alt="asset"
              className="ml-auto translate-x-4"
            />
            <MobileCard img={about1.fields.image.fields.file.url} />
          </div>
          <div className="max-w-2xl">
            <h2 className="p-4 text-4xl font-semibold">
              {about1.fields.title}
            </h2>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>{documentToReactComponents(about1.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
