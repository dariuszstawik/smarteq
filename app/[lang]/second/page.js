import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import HeroSection from "../components/main-page/hero-section";
import BlogSectionHome from "../components/global-components/blog-section-home";
import OfferSection from "../components/main-page/offer-section";
import AboutFirst from "../components/main-page/about-first";
import AboutSecond from "../components/main-page/about-second";
import AboutThird from "../components/main-page/about-third";
import AboutFourth from "../components/main-page/about-fourth";
import GraphicOffer from "../components/main-page/price-list";
import ContactForm from "../components/global-components/contact-form";
import NavbarHomepage from "../components/global-components/navbar-homepage";

export default async function page({ params: { lang } }) {
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

      <HeroSection lang={lang} />

      <BlogSectionHome content={blogPost} lang={lang} />

      <OfferSection lang={lang} />

      <AboutFirst about1={about1} lang={lang} />

      <AboutSecond about2={about2} />

      <AboutThird about3={about3} />

      <AboutFourth about4={about4} />

      <GraphicOffer lang={lang} />

      <ContactForm />
    </main>
  );
}
