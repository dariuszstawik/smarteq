import React from "react";
import Button from "../../global-components/buttton";
import Link from "next/link";

const ContactCta = ({ lang }) => {
  return (
    <section className="relative bg-smartGray w-full h-[calc(100vh-112px)] mt-28 flex justify-center items-center">
      <img
        src="/hero-asset-circles.svg"
        className="w-32 hidden md:block md:absolute bottom-[20%] left-[20%]"
      />
      <img
        src="/hero-asset-gray-circle.svg"
        className="w-32 hidden md:block md:absolute top-[7%] left-[20%]"
      />
      <img
        src="/asset-about3.svg"
        width="140px"
        alt="asset"
        className="hidden md:block absolute bottom-16 right-48"
      />
      {/* <div className=" flex flex-col justify-center items-center h-[calc(100vh-112px)] bg-contain bg-center bg-no-repeat mx-auto"> */}
      <div className="mx-80">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold m-6">
          Get acquainted with our future equestrian sport stars
        </h1>
        <p className="ml-6">All horses for sale - feel free to contact us!</p>
        <div className="flex justify-center items-center">
          <Link className="text-inherit" href={`/${lang}/#contactSection`}>
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
