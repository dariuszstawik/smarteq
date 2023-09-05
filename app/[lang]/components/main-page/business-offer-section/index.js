import React from "react";
import ButtonLg from "../../global-components/buttonLg";
import Link from "next/link";

const BusinessOfferSection = ({ lang }) => {
  return (
    <section className="w-full flex justify-center mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 px-10 lg:px-28">
        <div className="flex flex-col justify-end items-center">
          <img
            src="/business-offer.svg"
            className="h-52 lg:h-64 mb-12"
            alt="business offer"
          />
          <Link className="text-inherit" href={`/${lang}/#offer`}>
            <ButtonLg isOrange>Business offer</ButtonLg>
          </Link>
        </div>
        <div className="flex flex-col justify-end items-center">
          <img
            src="/exercises.svg"
            className="h-52 lg:h-64 mb-12"
            alt="view my exercises"
          />
          <Link className="text-inherit" href={`/${lang}/exercises`}>
            <ButtonLg>View my exercises</ButtonLg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessOfferSection;
