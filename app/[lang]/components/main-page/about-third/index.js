import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";

const AboutThird = ({ about3 }) => {
  return (
    <div className="relative w-full">
      <img
        src="/asset-about3.svg"
        width="110px"
        alt="asset"
        className="absolute -top-10 right-72"
      />
      <section className="container mx-auto">
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <MobileCard img={about3.fields.image.fields.file.url} />

          <div className="max-w-2xl">
            <h2 className="p-4 text-4xl font-bold">{about3.fields.title}</h2>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>{documentToReactComponents(about3.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutThird;
