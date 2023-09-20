import React from "react";

const ButtonLg = ({ children, isOrange, className }) => {
  return (
    <button
      className={`px-8 py-4 m-6 lg:text-2xl border border-smartOrange rounded-full hover:bg-orange-300 active:bg-smartOrange transition transition-duration-300 ${className} ${
        isOrange ? "bg-smartOrange" : "bg-white"
      } `}
    >
      {children}
    </button>
  );
};

export default ButtonLg;
