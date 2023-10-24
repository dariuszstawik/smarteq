"use client";
import React from "react";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ lang, privacyPolicy, termsAndConditions }) => {
  return (
    <section className="container mt-auto px-16 pt-28 pb-8 w-full mx-auto">
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10">
          <Logo />
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a href="https://www.facebook.com/smartequestrain/" target="_blank">
              <Image
                src="/fb-icon.svg"
                width="64"
                height="64"
                alt="facebook"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.facebook.com/smartequestrain/" target="_blank">
              <Image
                src="/messenger-icon.svg"
                width="64"
                height="64"
                alt="messenger"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/smart_equestrian_/"
              target="_blank"
            >
              <Image
                src="/instagram-icon.svg"
                width="64"
                height="64"
                alt="instagram"
                className="w-10 h-10"
              />
            </a>
            <a href="https://wa.me/48605820340" target="_blank">
              <Image
                src="/whatsapp-icon.svg"
                width="64"
                height="64"
                alt="whatsapp"
                className="w-10 h-10"
              />
            </a>

            <a href="https://www.tiktok.com/@smart_equestrian" target="_blank">
              <Image
                src="/tiktok-icon.svg"
                width="64"
                height="64"
                alt="tiktok"
                className="w-10 h-10"
              />
            </a>

            <a
              href="https://www.youtube.com/@smartequestrian3953"
              target="_blank"
            >
              <Image
                src="/yb-icon.svg"
                width="64"
                height="64"
                alt="youtube"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/smart-equestrian/"
              target="_blank"
            >
              <Image
                src="/linkedin-icon.svg"
                width="64"
                height="64"
                alt="linkedin"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-6 text-sm lg:text-base">
          <Link className="p-4" href={`/${lang}/privacy-policy`}>
            {privacyPolicy.title}
          </Link>
          <Link className="p-4" href={`/${lang}/terms-and-conditions`}>
            {termsAndConditions.title}
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-sm lg:text-base">
        <p className="mx-auto text-center">
          © 2023 Smart Equestrian. Created by Smart Equestrian &
          <a href="https://stronyjaksiepatrzy.pl" className="text-primaryGreen">
            {" "}
            Strony jak się patrzy
          </a>
          {/* All rights reserved. */}
        </p>

        {/* <p className="text-sm mx-auto text-center">
          Created by Smart Equestrian &
          <a href="https://stronyjaksiepatrzy.pl" className="text-primaryGreen">
            Strony jak się patrzy
          </a>
        </p> */}
      </div>
    </section>
  );
};

export default Footer;
