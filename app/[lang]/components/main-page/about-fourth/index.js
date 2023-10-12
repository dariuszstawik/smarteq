import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import Image from "next/image";

const AboutFourth = ({ about4 }) => {
  return (
    <div
      className="relative w-full lg:min-h-[calc(100vh-112px)] mt-16 pb-28 bg-smartGray"
      id="aboutSection"
    >
      <Image
        src="/asset-about2bg.svg"
        width="215"
        height="185"
        alt="asset"
        className="hidden xl:block absolute w-32 bottom-6 right-24"
      />

      <section className="container mx-auto">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-center gap-12 lg:gap-28 xl:gap-20">
          <div className="max-w-md">
            <Image
              src="/asset-about4phone.svg"
              alt="asset"
              width="110"
              height="94"
              className="ml-56 translate-y-[55%]"
            />

            <MobileCard
              hasOrangeBorder
              img={about4.fields.image.fields.file.url}
              graphicImgClassName="h-[400px] translate-x-4 "
            />
          </div>

          <div className="max-w-2xl">
            <div className="h-[106px] hidden lg:block" />
            <h2 className="p-4 pt-0">{about4.fields.title}</h2>
            <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl  ">
              <div>{documentToReactComponents(about4.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFourth;
