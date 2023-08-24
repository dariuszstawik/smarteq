import React from "react";

const BuyButton = ({ onClick }) => {
  return (
    <button
      className="py-4 pl-6 pr-8 m-6 uppercase border border-smartOrange rounded-full flex gap-4 bg-smartOrange"
      onClick={onClick}
    >
      <img src="/cart-icon.svg" className="w-6" alt="buy" />
      buy
    </button>
  );
};

export default BuyButton;
