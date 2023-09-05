import React from "react";

const BuyButton = ({ onClick }) => {
  return (
    <button
      className="py-2 px-6 m-6 text-lg uppercase border border-smartOrange rounded-full flex justify-center items-center gap-4 bg-smartOrange"
      onClick={onClick}
    >
      <img src="/cart-icon.svg" className="w-6" alt="buy" />
      buy
    </button>
  );
};

export default BuyButton;
