import React from "react";
import ButtonLg from "../../global-components/buttonLg";

const BusinessOfferSection = () => {
  return (
    <section className="w-full flex justify-center mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 mx-28">
        <div className="flex flex-col justify-end items-center">
          <img
            src="/business-offer.svg"
            className="h-64 mb-12"
            alt="business offer"
          />
          <ButtonLg isOrange>Business offer</ButtonLg>
        </div>
        <div className="flex flex-col justify-end items-center">
          <img
            src="/exercises.svg"
            className="h-64 mb-12"
            alt="view my exercises"
          />
          <ButtonLg>View my exercises</ButtonLg>
        </div>
      </div>
    </section>
  );
};

export default BusinessOfferSection;
