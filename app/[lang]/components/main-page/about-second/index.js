import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";

const AboutSecond = ({ about2 }) => {
  return (
    <div className="relative w-full xl:h-[calc(100vh-112px)] bg-smartGray">
      <img
        src="/asset-about2bg.svg"
        alt="asset"
        className="absolute w-32 top-16 right-24"
      />
      <section className="container mx-auto">
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <div className="max-w-[400px] -translate-y-[40px]">
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
          <div className="translate-y-[75px] max-w-2xl">
            <h2 className="p-4 text-4xl font-bold">{about2.fields.title}</h2>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>{documentToReactComponents(about2.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSecond;
