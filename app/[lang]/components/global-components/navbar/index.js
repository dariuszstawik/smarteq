"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Logo from "../logo";
import Hamburger from "../hamburger";
import { ShoppingCartIcon } from "../shoppping-cart-icon";
import { useRouter } from "next/navigation";
import LocaleSwitcher from "../locale-switcher";
import { addToCart } from "@/app/[lang]/GlobalRedux/store";

const Navbar = ({ lang, navigation }) => {
  // const { navigation } = getDictionary(lang);
  const router = useRouter();

  // useEffect(() => {
  //   localStorage.getItem("cart")
  //     ? dispatch(addToCart(...JSON.parse(localStorage.getItem("cart"))))
  //     : "";
  // }, []);

  const cartItems = useSelector((state) => state.cart);

  const [isHomePage, setIsHomePage] = useState(true);

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className=" text-base lg:text-lg fixed w-screen h-28 flex justify-between items-center px-4 lg:px-10 xl:px-16 py-4 bg-white top-0 left-0 z-50">
      <Logo closeMobileMenu={closeMobileMenu} lang={lang} />
      <div className="w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? "bg-white text-sm font-medium list-none absolute z-40 w-full top-full left-0 bg-backgroundGray py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row my-4 ml-4"
              : "bg-white text-sm font-medium list-none flex-col justify-center align-center items-center gap-10 lg:gap-8 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link
              href={`/${lang}//#graphicOffer`}
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {navigation.graphicOffer}
            </Link>
          </li>
          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link
              href={`/${lang}//#ridingOffer`}
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {navigation.ridingOffer}
            </Link>
          </li>
          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link
              href={`/${lang}//#aboutSection`}
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {navigation.about}
            </Link>
          </li>

          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href={`/${lang}/exercises`}>{navigation.exercises}</Link>
          </li>

          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href={`/${lang}/horse-for-sale`}>
              {navigation.horsesForSale}
            </Link>
          </li>
          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link href={`/${lang}/blog`}>{navigation.blog}</Link>
          </li>

          <li className="uppercase text-sm text-center font-semibold text-slate-700 hover:text-slate-900 cursor-pointer">
            <Link
              href={`/${lang}//#contactSection`}
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {navigation.contact}
            </Link>
          </li>
          <li className="">
            <Link href={`/${lang}/cart-page`}>
              <ShoppingCartIcon itemCount={cartItems.length} />
            </Link>
          </li>
        </ul>

        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />

        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
