import React from "react";
import ButtonLg from "../../global-components/buttonLg";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "../../global-components/section-title";

export default async function OfferSection({ lang }) {
  const { equestrianOffer } = await getDictionary(lang);

  return (
    <section className="container mx-auto h-[calc(100vh-112px)] pt-32 pb-12">
      <SectionTitle>{equestrianOffer.title}</SectionTitle>
      <div className="lg:bg-[url('/offer-img.svg')] w-full h-full bg-contain bg-center bg-no-repeat mx-auto ">
        <div className="w-full min-h-full lg:h-full grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center mx-auto pb-20">
          <div className="flex flex-col-reverse lg:flex-col w-full justify-center items-center">
            <div classname="flex flex-col justify-center ">
              <div className="hidden lg:block h-[292px] w-1/2 mx-auto">
                <img
                  src="asset-dots.svg"
                  alt="asset-dots"
                  width="147px"
                  height="129px"
                  className=""
                />
              </div>
              <ButtonLg isOrange className="mx-auto">
                {equestrianOffer.buttonHorses}
              </ButtonLg>
            </div>
            <img
              src="woman-img.svg"
              alt="woman graphic"
              width="113px"
              height="196px"
              className="lg:self-start mx-auto lg:ml-32"
            />
          </div>

          <div className="relative flex flex-col w-full">
            <div classname="flex flex-col justify-center items-center content-center">
              <div className=" mx-auto lg:mx-0 flex justify-center lg:h-[292px] w-1/2">
                <img
                  src="horse-jumping.svg"
                  alt="horse jumping"
                  width="246px"
                  height="204px"
                  className="lg:ml-20"
                />
              </div>
              <div className="w-1/2 flex justify-center mx-auto lg:mx-0 lg:ml-14 mb-12">
                <ButtonLg className="mx-auto lg:mr-auto">
                  {equestrianOffer.buttonExercises}
                </ButtonLg>
              </div>
            </div>
            <img
              src="asset-circle1.svg"
              alt="asset-circle"
              width="155px"
              height="137px"
              className="hidden lg:block absolute top-[26%] right-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
