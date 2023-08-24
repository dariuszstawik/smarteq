import ProductCard from "@/components/product-card";
import { client } from "@/lib/contentful/client";
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

export default async function ItemsToBuy() {
  const products = await getStripeProducts();

  const resProductsContent = await client.getEntries(
    { content_type: "exercises" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const productsContent = resProductsContent.items;

  return (
    <section className="container mx-auto">
      <ul>
        {products.map((product, i) => (
          // make a <li> for each product in the list of products from Stripe API and pass the product as a prop to the ProductCard component, for each product we want to pass as a prop the product content from the Contentful API, so we need to filter the productsContent array to find the product with the same key property as the product from the Stripe API, then we can pass the product content as a prop to the ProductCard component
          <li key={product.product.id}>
            <ProductCard
              product={product}
              productContent={productsContent.filter(
                (productContent) =>
                  productContent.fields.keyFromStripe ===
                  product.product.metadata.key
              )}
            />

            {/* <li key={product.product.id}>
<ProductCard product={product} /> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
