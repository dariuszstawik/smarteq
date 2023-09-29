import { client } from "@/lib/contentful/client";
import React from "react";
import Stripe from "stripe";
import ProductCard from "../../product-card";
import { getDictionary } from "@/lib/dictionary";

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

export default async function ItemsToBuy({ lang }) {
  const { exercises } = await getDictionary(lang);

  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const stripeProducts = await getStripeProducts();

  const resContentfulProducts = await client.getEntries(
    { content_type: "exercises", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const contentfulProducts = resContentfulProducts.items;

  return (
    <section className="container mx-auto">
      <ul>
        {contentfulProducts.map((contentfulProduct, i) => (
          <li key={i}>
            <ProductCard
              exercises={exercises}
              contentfulProduct={contentfulProduct}
              stripeProduct={stripeProducts.filter(
                (stripeProduct) =>
                  stripeProduct.product.metadata.key ===
                  contentfulProduct.fields.keyFromStripe
              )}
              isEven={i % 2 === 0}
            />
          </li>
        ))}

        {/* {products.map((product, i) => (
          <li key={product.product.id}>
            <ProductCard
              product={product}
              productContent={productsContent.filter(
                (productContent) =>
                  productContent.fields.keyFromStripe ===
                  product.product.metadata.key
              )}
            />
          </li>
        ))} */}
      </ul>
    </section>
  );
}
