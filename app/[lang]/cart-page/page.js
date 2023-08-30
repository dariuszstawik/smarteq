import React from "react";
import Stripe from "stripe";
import CartView from "../components/CartView";
import PageHeader from "../components/global-components/page-header";
import { getDictionary } from "@/lib/dictionary";
import Navbar from "../components/global-components/navbar";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function cartPage({ params: { lang } }) {
  const products = await getStripeProducts();
  const { navigation } = await getDictionary(lang);

  return (
    <>
      <Navbar navigation={navigation} lang={lang} />
      <PageHeader>Cart</PageHeader>
      <div className="max-w-3xl mx-auto">
        <CartView lang={lang} />
      </div>
    </>
  );
}
