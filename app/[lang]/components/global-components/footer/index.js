"use client";
import React from "react";
import Logo from "../logo";

const Footer = () => {
  return (
    <section className="container mt-auto p-16 pt-28 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10">
      <Logo />
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <a href="https://www.facebook.com/smartequestrain/" target="_blank">
          <img src="/fb-icon.svg" alt="facebook" className="w-10 h-10" />
        </a>
        <a href="https://www.facebook.com/smartequestrain/" target="_blank">
          <img
            src="/messenger-icon.svg"
            alt="messenger"
            className="w-10 h-10"
          />
        </a>
        <a href="https://www.instagram.com/smart_equestrian_/" target="_blank">
          <img
            src="/instagram-icon.svg"
            alt="instagram"
            className="w-10 h-10"
          />
        </a>
        <a href="https://wa.me/48605820340" target="_blank">
          <img src="/whatsapp-icon.svg" alt="whatsapp" className="w-10 h-10" />
        </a>

        <a href="https://www.tiktok.com/@smart_equestrian" target="_blank">
          <img src="/tiktok-icon.svg" alt="tiktok" className="w-10 h-10" />
        </a>

        <a href="https://www.youtube.com/@smartequestrian3953" target="_blank">
          <img src="/yb-icon.svg" alt="youtube" className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/company/smart-equestrian/"
          target="_blank"
        >
          <img src="/linkedin-icon.svg" alt="linkedin" className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
