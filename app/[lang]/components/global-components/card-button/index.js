import React from "react";

const CardButton = ({ children }) => {
  return (
    <button
      className={"text-base p-2 m-4 border bg-gray-300 rounded-full ml-auto"}
    >
      {children}
    </button>
  );
};

export default CardButton;
