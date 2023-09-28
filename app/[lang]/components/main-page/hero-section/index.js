import React from "react";
import Button from "../../global-components/buttton";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";

export default async function HeroSection({ lang }) {
  const { heroSection } = await getDictionary(lang);
  return (
    <section className="relative bg-smartGray w-full h-560px xl:h-[calc(100vh-112px)] xl:min-h-[715px] overflow-x-hidden">
      <img
        src="/asset-about2bg.svg"
        className="w-32 hidden md:block md:absolute top-[10%] left-[50%] -translate-x-[50%] z-50"
      />

      <img
        src="/hero-asset-gray-circle.svg"
        className="w-32 hidden md:block md:absolute bottom-[20%] left-[8%]"
      />

      <img
        src="/hero-asset-circles.svg"
        className="w-32 hidden md:block md:absolute bottom-[20%] left-[38%]"
      />

      <img
        src="/hero-asset-horse.svg"
        className="hidden ml-[10%] max-w-[60%] tall:max-w-[80%] md:block md:absolute bottom-0 right-0 z-30"
      />

      <div
        className="relative 
        h-[560px] xl:h-[calc(100vh-112px)]"
      >
        <div className="h-full flex flex-col justify-center items-center md:block">
          <div className="relative ml-[5%] md:ml-[12%] 2xl:ml-[16%] flex flex-col xl:justify-center">
            <h1 className="text-center md:text-left mx-auto text-2xl sm:text-3xl md:hidden">
              {/* Step into the world of graphic */}
              {heroSection.titleSpan1}
              {heroSection.titleSpan2}
            </h1>
            <h1 className="text-center hidden relative text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold md:flex items-center pt-20">
              <span className="pr-2 md:w-60 md:h-60 xl:w-96 xl:h-96 md:border-4 md:rounded-full md:border-smartOrange flex justify-end items-center">
                {heroSection.titleSpan1}
              </span>
              <span className="ml-2">{heroSection.titleSpan2}</span>
            </h1>
            <p
              className="max-w-3xl text-center md:text-left md:text-lg lg:text-xl md:absolute bottom-6 lg:bottom-6 xl:bottom-6 left-[60px] xl:left-[140px]"
              // translate-y-[450%] xl:translate-y-[300%] lg:-translate-x-[13%]
            >
              {heroSection.subtitle}
            </p>
          </div>
          {/* <div className="flex justify-center md:-translate-y-[30%] lg:-translate-y-[50%] xl:-translate-y-[100%]">
            <Link className="text-inherit" href={`/${lang}/exercises`}>
              <Button>Check my exercises</Button>
            </Link>
          </div> */}
          <img src="/hero-asset-horse.svg" className="md:hidden" />
        </div>
      </div>
    </section>
  );
}
