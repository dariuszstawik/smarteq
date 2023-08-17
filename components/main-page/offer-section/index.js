import ButtonLg from "@/components/global-components/buttonLg";
import Button from "@/components/global-components/buttton";
import React from "react";

const OfferSection = () => {
  return (
    <section className="container mx-auto h-[calc(100vh-112px)] mt-28">
      <div className="bg-[url('/offer-img.svg')] w-full h-full bg-contain bg-center bg-no-repeat mx-auto ">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6 place-content-center">
          <div className="relative flex flex-col w-full items-end">
            <div classname="flex flex-col justify-end">
              <div className="h-[292px] w-1/2">
                <img
                  src="asset-dots.svg"
                  alt="asset-dots"
                  width="147px"
                  height="129px"
                  className=""
                />
              </div>
              <ButtonLg isOrange className="mr-28">
                horses for sale
              </ButtonLg>
            </div>
            <img
              src="woman-img.svg"
              alt="woman graphic"
              width="113px"
              height="196px"
              className="self-start ml-32"
            />
          </div>

          <div className="relative flex flex-col w-full ">
            <div classname="flex flex-col justify-end ">
              <div className="h-[292px] w-1/2 flex flex-col place-content-end">
                <img
                  src="horse-jumping.svg"
                  alt="horse jumping"
                  width="246px"
                  height="204px"
                  className="ml-8 mb-8"
                />
              </div>

              <ButtonLg className=" mr-auto">view my exercises</ButtonLg>
            </div>
            <img
              src="asset-circle1.svg"
              alt="asset-circle"
              width="155px"
              height="137px"
              className="absolute top-[26%] right-20"
            />
          </div>

          {/* <div className="basis-1/2 flex flex-col shrink-0">
            <img src="asset-dots.svg" alt="asset-dots" />
            <ButtonLg isOrange className="mx-auto">
              horses for sale
            </ButtonLg>
          </div>
          <div className="basis-1/2 shrink-0">
            <img src="woman-img.svg" alt="woman grphic" className="w-36" />
          </div>
        </div>
        <div className="inline-block ">
          <ButtonLg>view my exercises</ButtonLg>
        </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
