import React from "react";
import MobileCard from "../mibile-card";

const AboutFirst = () => {
  return (
    <div className="w-full">
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
          <div>
            <h2 className="p-4 text-4xl font-semibold">
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

export default AboutFirst;
