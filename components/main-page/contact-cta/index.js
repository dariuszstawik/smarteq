import Button from "@/components/global-components/buttton";
import React from "react";

const ContactCta = () => {
  return (
    <section className="bg-smartGray w-full h-[calc(100vh-112px)] mt-28">
      <div className=" flex flex-col justify-center items-center bg-[url('/bg-contact-cta.svg')] h-[calc(100vh-112px)] bg-contain bg-center bg-no-repeat mx-auto">
        <div className="mx-80">
          <h1 className="text-6xl">
            Get acquainted with our future equestrian sport stars
          </h1>
          <p>All horses for sale - feel free to contact us!</p>
        </div>
        <Button>Contact</Button>
      </div>
    </section>
  );
};

export default ContactCta;
