import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";

const AboutSecond = ({ about2 }) => {
  return (
    <div
      className="relative w-full lg:h-[calc(100vh-112px)] mt-32 pb-20 bg-smartGray"
      id="aboutSection"
    >
      <img
        src="/asset-about2bg.svg"
        alt="asset"
        className="hidden xl:block absolute w-32 top-16 right-24"
      />
      <section className="container mx-auto">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-center gap-12 lg:gap-28 xl:gap-20">
          <div className="max-w-md">
            <img
              src="/asset-about2phone.svg"
              alt="asset"
              width="110px"
              className="ml-56 translate-y-[55%]"
            />
            <MobileCard
              hasOrangeBorder
              img={about2.fields.image.fields.file.url}
            />
          </div>

          <div className="max-w-2xl">
            <div className="h-[106px] hidden lg:block" />
            <h2 className="p-4 pt-0">{about2.fields.title}</h2>
            <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl">
              <div>{documentToReactComponents(about2.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSecond;
