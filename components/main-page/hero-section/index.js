import Button from "@/components/global-components/buttton";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-smartGray w-full h-[600px] xl:h-[calc(100vh-112px)] mb-28">
      <img
        src="/asset-about2bg.svg"
        className="w-32 absolute top-[10%] left-[50%] -translate-x-[50%] z-50"
      />

      <img
        src="/hero-asset-gray-circle.svg"
        className="w-32 absolute bottom-[20%] left-[8%]"
      />

      <img
        src="/hero-asset-circles.svg"
        className="w-32 absolute bottom-[20%] left-[38%]"
      />

      <img
        src="/hero-asset-horse.svg"
        className="ml-[10%] w-[80%] absolute bottom-0 right-0 z-30"
      />

      <div
        className="relative 
      h-[calc(100vh-112px)] 
 "
      >
        <div>
          <div className="relative ml-[12%] flex flex-col xl:justify-center">
            <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold flex items-center pt-20">
              {/* translate-y-[20%] */}
              <span className="pr-2 md:w-60 md:h-60 xl:w-96 xl:h-96 border-4 rounded-full border-smartOrange flex justify-end items-center">
                Step into{" "}
              </span>
              <span className="ml-2">the world of graphics</span>
            </h1>
            <p
              className="text-lg absolute bottom-10 lg:bottom-16 xl:bottom-32 left-[86px] xl:left-[140px]"
              // translate-y-[450%] xl:translate-y-[300%] lg:-translate-x-[13%]
            >
              We create graphic materials for companies passionate about the
              equestrian world{" "}
            </p>
          </div>
          <div className="flex justify-center md:-translate-y-[30%] lg:-translate-y-[50%] xl:-translate-y-[100%]">
            <Button>Check my exercises</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
