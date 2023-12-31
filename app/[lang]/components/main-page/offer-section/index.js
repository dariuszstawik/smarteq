import React from "react";
import ButtonLg from "../../global-components/buttonLg";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "../../global-components/section-title";
import Link from "next/link";
import Image from "next/image";

export default async function OfferSection({ lang }) {
  const { equestrianOffer } = await getDictionary(lang);

  return (
    <section className="container mx-auto min-h-[calc(100vh-112px)] pt-32 overflow-hidden">
      <SectionTitle>{equestrianOffer.title}</SectionTitle>
      <div className="max-w-[700px] my-10 mx-10 md:mx-32 xl:mx-auto text-center">
        {equestrianOffer.paragraph}
      </div>
      <div className="lg:bg-[url('/offer-img.svg')] w-full bg-contain bg-center bg-no-repeat mx-auto overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row mx-auto">
          <div className="flex flex-col-reverse lg:flex-col w-full justify-center items-center">
            <div className="flex flex-col justify-center m-8">
              <div className="h-[204px] hidden lg:block" />
              <Link className="text-inherit" href={`/${lang}/horse-for-sale`}>
                <ButtonLg isOrange className="mx-auto">
                  {equestrianOffer.buttonHorses}
                </ButtonLg>
              </Link>
            </div>
            <Image
              src="woman-img.svg"
              alt="woman graphic"
              width="113"
              height="196"
              className="lg:self-start mx-auto lg:ml-32"
            />
          </div>

          <div className="relative flex flex-col w-full">
            <div className="flex flex-col justify-center items-center content-center">
              <div className=" mx-auto lg:ml-0 flex justify-center lg:max-h-[292px] w-1/2">
                <Image
                  src="horse-jumping.svg"
                  alt="horse jumping"
                  width="246"
                  height="204"
                  className=""
                />
              </div>
              <div className="w-1/2 flex justify-center mx-auto lg:mx-0 lg:ml-14 mb-8">
                <Link className="text-inherit" href={`/${lang}/exercises`}>
                  <ButtonLg className="mx-auto lg:ml-0">
                    {equestrianOffer.buttonExercises}
                  </ButtonLg>
                </Link>
              </div>
              <div className="h-[196px] hidden lg:block" />
            </div>
            <Image
              src="asset-circle1.svg"
              alt="asset-circle"
              width="155"
              height="137"
              className="hidden absolute top-[26%] right-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
