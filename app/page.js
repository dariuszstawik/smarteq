import CartView from "@/components/CartView";
import ContactForm from "@/components/global-components/contact-form";
import ImageGallery from "@/components/image-gallery";
import AboutFirst from "@/components/main-page/about-first";
import AboutFourth from "@/components/main-page/about-fourth";
import AboutSecond from "@/components/main-page/about-second";
import AboutThird from "@/components/main-page/about-third";
import BusinessOfferSection from "@/components/main-page/business-offer-section";
import ContactCta from "@/components/main-page/contact-cta";
import HeroSection from "@/components/main-page/hero-section";
import HorsesToSell from "@/components/main-page/horses-to-sell";
import InstagramSection from "@/components/main-page/instagram-section";
import NewsSection from "@/components/main-page/news-section";
import OfferSection from "@/components/main-page/offer-section";
import PriceList from "@/components/main-page/price-list";
import Modal from "@/components/modal";
import Slider from "@/components/slider/slider";
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

export default async function Home() {
  const products = await getStripeProducts();

  return (
    <main>
      <div className="w-full h-full">
        {/* <ul>
          {products.map((product, i) => (
            <li key={product.product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

<div>Cart</div>
<CartView/> */}
        <HeroSection />
        <InstagramSection />

        <NewsSection />
        <Slider />
        <OfferSection />
        <AboutFirst />
        <AboutSecond />
        <AboutThird />
        <AboutFourth />

        <BusinessOfferSection />
        <ContactCta />
        <HorsesToSell />
        <ImageGallery />
        <PriceList />
        <ContactForm />

        {/* <div id="portal"></div> */}
      </div>
    </main>
  );
}
