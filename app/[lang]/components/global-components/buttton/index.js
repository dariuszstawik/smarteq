import React from "react";

const Button = ({ children, isOrange, className }) => {
  return (
    <button
      className={`p-3 m-6 uppercase border border-smartOrange rounded-full hover:bg-orange-300 active:bg-smartOrange transition transition-duration-300 ${className} ${
        isOrange ? "bg-smartOrange" : "bg-white"
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
