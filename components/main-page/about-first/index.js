import React from "react";
import MobileCard from "../mibile-card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutFirst = ({ about1 }) => {
  console.log("about1 about first " + about1);
  console.log(about1);
  return (
    <div className="w-full" id="aboutSection">
      <section className="container mx-auto">
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <div className="max-w-[400px] -translate-y-[105px]">
            <img
              src="/asset-about1.svg"
              alt="asset"
              className="ml-auto translate-x-4"
            />
            <MobileCard />
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
};

export default AboutFirst;
