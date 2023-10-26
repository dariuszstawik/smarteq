import { getDictionary } from "@/lib/dictionary";
import { client } from "@/lib/contentful/client";
import Navbar from "../../components/global-components/navbar";
import ImageGallery from "../../components/image-gallery";
import PageHeader from "../../components/global-components/page-header";
import MobileCard from "../../components/main-page/mibile-card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

async function getContentfulContent(contentfulLang, slug) {
  const resHorsesForSalePost = await client.getEntries(
    {
      content_type: "horseForSale",
      "fields.slug": slug,
      locale: contentfulLang,
    },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesForSalePost = resHorsesForSalePost.items[0];

  const resHorsesForSale = await client.getEntries(
    { content_type: "horseForSale", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const horsesForSale = resHorsesForSale.items;

  return [horsesForSalePost, horsesForSale];
}

export default async function HorseForSalePost({ params }) {
  const { navigation, horsesForSale } = await getDictionary(params.lang);
  const slug = params.slug;

  let contentfulLang;
  if (params.lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const horsesForSaleContent = await getContentfulContent(contentfulLang, slug);

  return (
    <>
      <Head>
        <title>
          {horsesForSale.title} : {horsesForSaleContent[0].fields.title}
        </title>
        <meta
          name="description"
          content={`${horsesForSale.title} : Smart Equestrian`}
        />
      </Head>

      <div className="w-full">
        <Navbar navigation={navigation} lang={params.lang} />
        <PageHeader>{horsesForSale.title}</PageHeader>
        <section className="container mx-auto">
          <div className="max-w-7xl my-10 pb-4 mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
            <div className="max-w-md">
              <MobileCard
                img={horsesForSaleContent[0].fields.image.fields.file.url}
              />
            </div>

            <div className="max-w-2xl">
              <h2 className="p-4 text-4xl font-semibold">
                {horsesForSaleContent[0].fields.title}
              </h2>
              <h3 className="pl-4 text-2xl">
                {horsesForSaleContent[0].fields.subtitle}
              </h3>
              <div className="bg-white p-4 rounded-2xl mt-4">
                <div>
                  {documentToReactComponents(
                    horsesForSaleContent[0].fields.content
                  )}
                </div>
              </div>
              <h3 className="p-4">
                {horsesForSale.contact}: <span className="w-16" />
                <span className="text-smartOrange">
                  {horsesForSaleContent[0].fields.contact}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex justify-center items-center mt-28"> </div>
          <h2 className="m-6 lg:-mt-8 lg:pl-40 text-4xl font-semibold">
            {horsesForSale.title2}
          </h2>
          <ImageGallery lang={params.lang} content={horsesForSaleContent[1]} />
        </section>
      </div>
    </>
  );
}
