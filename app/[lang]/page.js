import { client } from "@/lib/contentful/client";
import React from "react";
import HeroSection from "./components/main-page/hero-section";
import OfferSection from "./components/main-page/offer-section";
import AboutFirst from "./components/main-page/about-first";
import AboutSecond from "./components/main-page/about-second";
import AboutThird from "./components/main-page/about-third";
import BusinessOfferSection from "./components/main-page/business-offer-section";
import ContactCta from "./components/main-page/contact-cta";
import HorsesToSell from "./components/main-page/horses-to-sell";
import ContactForm from "./components/global-components/contact-form";
import AboutFourth from "./components/main-page/about-fourth";
import { getDictionary } from "@/lib/dictionary";
import NavbarHomepage from "./components/global-components/navbar-homepage";
import BlogSectionHome from "./components/global-components/blog-section-home";
import GraphicOffer from "./components/main-page/price-list";
import ImageGallery from "./components/image-gallery";

export default async function Home({ params: { lang } }) {
  const { page, navigation, horsesForSale } = await getDictionary(lang);

  let contentfulLang;

  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const resAbout1 = await client.getEntries(
    { content_type: "about1", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const resAbout2 = await client.getEntries(
    { content_type: "about2", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const resAbout3 = await client.getEntries(
    { content_type: "about3", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const resAbout4 = await client.getEntries(
    { content_type: "about4", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const about1 = resAbout1.items[0];
  const about2 = resAbout2.items[0];
  const about3 = resAbout3.items[0];
  const about4 = resAbout4.items[0];

  const resBlogPosts = await client.getEntries(
    { content_type: "blogPost", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const blogPost = resBlogPosts.items;

  const resHorsesForSale = await client.getEntries(
    { content_type: "horseForSale", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesForSaleContent = resHorsesForSale.items;

  return (
    <main>
      <NavbarHomepage navigation={navigation} lang={lang} />

      <HeroSection />

      <BlogSectionHome content={blogPost} lang={lang} />

      <OfferSection lang={lang} />

      <AboutFirst about1={about1} lang={lang} />

      <AboutSecond about2={about2} />

      <AboutThird about3={about3} />

      <AboutFourth about4={about4} />

      <BusinessOfferSection />

      <ContactCta />

      <HorsesToSell lang={lang} hasTitle />

      <h2 className="m-10 pl-28 text-4xl font-semibold">
        {horsesForSale.title2}
      </h2>

      <ImageGallery lang={lang} content={horsesForSaleContent} />

      <GraphicOffer lang={lang} />

      <ContactForm />
    </main>
  );
}
