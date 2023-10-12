import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ closeMobileMenu, lang }) => {
  return (
    <Link href={`/${lang}/`}>
      <Image
        className="w-72"
        width="403"
        height="101"
        src="/logo.svg"
        onClick={() => closeMobileMenu()}
      />
    </Link>
  );
};

export default Logo;
