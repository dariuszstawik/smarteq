import CartView from "@/components/CartView";
import BlogSection from "@/components/global-components/blog-section";
import ContactForm from "@/components/global-components/contact-form";
import PageHeader from "@/components/global-components/page-header";
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
import ProductCard from "@/components/product-card";
import Slider from "@/components/slider/slider";
import { client } from "@/lib/contentful/client";
import { createClient } from "contentful";
import React from "react";
import Stripe from "stripe";

export default async function Home() {
  const resAbout1 = await client.getEntries(
    { content_type: "about1" },
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const resAbout2 = await client.getEntries({ content_type: "about2" });
  const resAbout3 = await client.getEntries({ content_type: "about3" });
  const resAbout4 = await client.getEntries({ content_type: "about4" });

  const about1 = resAbout1.items[0];
  const about2 = resAbout2.items[0];
  const about3 = resAbout3.items[0];
  const about4 = resAbout4.items[0];

  const resBlogPosts = await client.getEntries(
    { content_type: "blogPost" },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = resBlogPosts.items;

  console.log("post blogowy" + about1);

  return (
    <main>
      <HeroSection />

      <BlogSection content={blogPost} isHomepage />
      {/* contentful */}

      <OfferSection />
      {/* contentful */}

      <AboutFirst about1={about1} />
      {/* contentful */}

      <AboutSecond about2={about2} />
      {/* contentful */}

      <AboutThird about3={about3} />
      {/* contentful */}

      <AboutFourth about4={about4} />
      {/* contentful */}

      <BusinessOfferSection />

      <ContactCta />

      <HorsesToSell />
      {/* contentful */}

      <ImageGallery />
      {/* contentful */}
      {/* client */}

      <PriceList />
      {/* contentful */}

      <ContactForm />
      {/* client */}

      {/* <div id="portal"></div> */}
      {/* </div> */}
    </main>
  );
}
