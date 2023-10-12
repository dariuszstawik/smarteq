import Image from "next/image";
import React from "react";

const LogoHomepage = ({ closeMobileMenu, handleScroll, lang }) => {
  return (
    <Image
      className="w-72"
      src="/logo.svg"
      width="403"
      height="101"
      onClick={() => closeMobileMenu()}
    />
  );
};

export default LogoHomepage;
