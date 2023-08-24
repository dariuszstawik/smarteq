import CartView from "@/components/CartView";
import ProductCard from "@/components/product-card";
import React from "react";
import Stripe from "stripe";

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

export default async function cartPage() {
  const products = await getStripeProducts();

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="mx-auto my-12">Cart</h2>
      <CartView />
    </div>
  );
}
