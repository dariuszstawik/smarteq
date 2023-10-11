import React from "react";

const LogoHomepage = ({ closeMobileMenu, handleScroll, lang }) => {
  return (
    <img className="w-72" src="/logo.svg" onClick={() => closeMobileMenu()} />
  );
};

export default LogoHomepage;
