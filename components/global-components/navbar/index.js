"use client";
import React, { use, useEffect, useState } from "react";
import Logo from "../logo";
import Hamburger from "../hamburger";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [router.pathname]);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed w-full h-28 flex justify-between items-center px-4 lg:px-16 py-4 bg-white top-0 left-0 z-40">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? "bg-white text-sm font-medium list-none absolute z-40 w-full top-full left-0 bg-backgroundGray py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row my-4 ml-4"
              : "bg-white text-sm font-medium list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            Offer
          </li>
          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link
              href="/#aboutSection"
              onClick={(e) => {
                closeMobileMenu();
                isHomePage ? handleScroll(e) : "";
              }}
            >
              {" "}
              About me{" "}
            </Link>
          </li>
          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href="/exercises">Exercises</Link>
          </li>
          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href="/horse-for-sale">Horses for sale</Link>
          </li>
          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            Contact
          </li>

          <li className="uppercase text-sm font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href="/cart-page">Cart</Link>
          </li>
        </ul>

        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
