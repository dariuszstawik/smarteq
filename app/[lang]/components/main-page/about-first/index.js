import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import SectionTitle from "../../global-components/section-title";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

export default async function AboutFirst({ about1, lang }) {
  const { aboutSection } = await getDictionary(lang);

  return (
    <div className="w-full" id="aboutSection">
      <section className="container mx-auto pt-32">
        <SectionTitle>{aboutSection.title}</SectionTitle>
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
          <div className="max-w-md">
            <Image
              src="/asset-about1.svg"
              width="167"
              height="106"
              alt="asset"
              className="ml-auto lg:translate-x-20"
            />
            <MobileCard img={about1.fields.image.fields.file.url} />
          </div>

          <div className="max-w-2xl">
            <div className="h-[106px] hidden lg:block" />
            <h2 className="px-4 py-0">{about1.fields.title}</h2>
            <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl">
              <div>{documentToReactComponents(about1.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
