import React from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../mibile-card";
import Image from "next/image";

const AboutThird = ({ about3 }) => {
  return (
    <div className="relative w-full lg:h-[calc(100vh-112px)] mt-20 pb-20">
      <Image
        src="/asset-about3.svg"
        width="110"
        height="110"
        alt="asset"
        className="absolute top-10 right-72"
      />
      <section className="container mx-auto pt-40">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
          <div className="max-w-md">
            <MobileCard img={about3.fields.image.fields.file.url} />
          </div>

          <div className="max-w-2xl">
            <h2 className="px-4 py-0">{about3.fields.title}</h2>
            <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl">
              <div>{documentToReactComponents(about3.fields.content)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutThird;
