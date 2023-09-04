"use client";
import React from "react";
import Logo from "../logo";

const Footer = () => {
  return (
    <section className="container mt-auto p-16 pt-28 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10">
      <Logo />
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <img src="/fb-icon.svg" alt="facebook" className="w-10 h-10" />
        <img src="/messenger-icon.svg" alt="messenger" className="w-10 h-10" />
        <img src="/instagram-icon.svg" alt="instagram" className="w-10 h-10" />
        <img src="/whatsapp-icon.svg" alt="whatsapp" className="w-10 h-10" />
        <img src="/tiktok-icon.svg" alt="tiktok" className="w-10 h-10" />
        <img src="/yb-icon.svg" alt="youtube" className="w-10 h-10" />
        <img src="/linkedin-icon.svg" alt="linkedin" className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Footer;
