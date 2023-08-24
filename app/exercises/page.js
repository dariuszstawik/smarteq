import CartView from "@/components/CartView";
import ItemsToBuy from "@/components/exercises-page/items-to-buy";
import ContactCta from "@/components/main-page/contact-cta";
import React from "react";

const page = () => {
  return (
    <div>
      <ItemsToBuy />
      <ContactCta />
      <div>Cart</div>

      <CartView />
    </div>
  );
};

export default page;
