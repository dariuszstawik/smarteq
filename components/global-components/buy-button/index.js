import React from "react";

const BuyButton = () => {
  return (
    <button className="py-4 pl-6 pr-8 m-6 uppercase border border-orange-600 rounded-full flex gap-4 bg-orange-600">
      <img src="/cart-icon.svg" className="w-6" alt="buy" />
      buy
    </button>
  );
};

export default BuyButton;
