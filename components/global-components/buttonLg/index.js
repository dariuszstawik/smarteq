import React from "react";

const ButtonLg = ({ children, isOrange, className }) => {
  return (
    <button
      className={`px-8 py-4 m-6 text-2xl border border-smartOrange rounded-full ${className} ${
        isOrange ? "bg-smartOrange" : "bg-white"
      } `}
    >
      {children}
    </button>
  );
};

export default ButtonLg;
