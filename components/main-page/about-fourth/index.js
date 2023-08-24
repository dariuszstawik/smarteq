import React from "react";
import MobileCard from "../mibile-card";

const AboutFourth = () => {
  return (
    <div className="relative w-full bg-smartGray">
      <img
        src="/asset-about2bg.svg"
        alt="asset"
        className="absolute w-32 bottom-6 right-24"
      />
      <section className="container mx-auto">
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <div className="max-w-[400px] -translate-y-[105px]">
            <img
              src="/asset-about4phone.svg"
              alt="asset"
              width="180px"
              className="ml-44 translate-y-[55%]"
            />
            <MobileCard />
          </div>
          <div className="translate-y-[75px] max-w-2xl">
            <h2 className="p-4 text-4xl font-bold">
              My career in equestrian sports2
            </h2>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>
                I pass on the ecquired knowledge and professional experience to
                younger and older riding students. I teach them how to approach
                equestrianism and what competition is all about. I pay attention
                to thinking while working with a horse and open their minds to
                the bigger picture of horse training. I pass on to my students
                techniques taken from the best German riders and trainers. My
                students reach good results at regional competitions and expand
                their level by taking horses into training or working with young
                horses.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFourth;
