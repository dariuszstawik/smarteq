import Link from "next/link";
import React from "react";

const Logo = ({ closeMobileMenu, lang }) => {
  return (
    <Link href={`/${lang}/`}>
      <img className="w-72" src="/logo.svg" onClick={() => closeMobileMenu()} />
    </Link>
  );
};

export default Logo;
