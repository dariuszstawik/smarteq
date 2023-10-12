import React from "react";
import Button from "../../global-components/buttton";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

export default async function HeroSection({ lang }) {
  const { heroSection } = await getDictionary(lang);
  return (
    <section className="relative bg-smartGray w-full h-560px xl:h-[calc(100vh-112px)] xl:min-h-[715px] overflow-x-hidden">
      <Image
        src="/asset-about2bg.svg"
        width="215"
        height="185"
        className="w-32 hidden md:block md:absolute top-[10%] left-[50%] -translate-x-[50%] z-50"
      />

      <Image
        src="/hero-asset-gray-circle.svg"
        width="150"
        height="150"
        className="w-32 hidden md:block md:absolute bottom-[20%] left-[8%]"
      />

      <Image
        src="/hero-asset-circles.svg"
        width="208"
        height="132"
        className="w-32 hidden md:block md:absolute bottom-[20%] left-[38%]"
      />

      <Image
        src="/hero-asset-horse.svg"
        width="1625"
        height="850"
        className="hidden ml-[10%] max-w-[60%] tall:max-w-[80%] md:block md:absolute bottom-0 right-0 z-30"
      />

      <div
        className="relative 
        h-[560px] xl:h-[calc(100vh-112px)]"
      >
        <div className="h-full flex flex-col justify-center items-center md:block">
          <div className="relative ml-[5%] md:ml-[12%] 2xl:ml-[16%] flex flex-col xl:justify-center">
            <h1 className="text-center md:text-left mx-auto text-2xl sm:text-3xl md:hidden">
              <span className="pr-2">{heroSection.titleSpan1}</span>
              {heroSection.titleSpan2}
            </h1>
            <h1 className="hidden relative text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold md:flex items-center pt-20">
              <span className="pr-2 md:w-60 md:h-60 xl:w-96 xl:h-96 md:border-4 md:rounded-full md:border-smartOrange flex justify-end items-center">
                {/* <span className="pr-2 pl-8 md:w-60 md:h-60 xl:w-96 xl:h-96 md:border-4 md:rounded-full md:border-smartOrange flex justify-end items-center"> */}
                {heroSection.titleSpan1}
              </span>
              <span className="ml-4">{heroSection.titleSpan2}</span>
            </h1>
            <p
              className={`max-w-2xl lg:max-w-3xl text-center px-2 md:text-left md:text-lg lg:text-xl md:absolute -bottom-2 xl:bottom-8 left-[80px] ${
                lang === "en" ? "xl:left-[126px]" : "xl:left-[86px]"
              } `}
            >
              {heroSection.subtitle}
            </p>
          </div>
          <Image
            src="/hero-asset-horse.svg"
            width="1625"
            height="850"
            className="md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
