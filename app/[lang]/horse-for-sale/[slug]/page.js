import { getDictionary } from "@/lib/dictionary";
import HorsesToSell from "../../components/main-page/horses-to-sell";
import { client } from "@/lib/contentful/client";
import Navbar from "../../components/global-components/navbar";
import ImageGallery from "../../components/image-gallery";
import YoutubePlayer from "../../components/horses-for-sale-page/youtube-player";
import SectionTitle from "../../components/global-components/section-title";
import PageHeader from "../../components/global-components/page-header";
import MobileCard from "../../components/main-page/mibile-card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulContent(contentfulLang, slug) {
  const resHorsesForSalePost = await client.getEntries(
    { content_type: "horseForSale", "fields.slug": slug },
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

  //   console.log("-------- horses for sale post --------");
  //   console.log(horsesForSalePost);

  return (
    <div className="w-full">
      <Navbar navigation={navigation} lang={params.lang} />
      <PageHeader>Horses for sale</PageHeader>
      <section className="container mx-auto">
        {/* <SectionTitle>{horsesForSale.fields.title}</SectionTitle> */}
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <MobileCard
            img={horsesForSaleContent[0].fields.image.fields.file.url}
          />

          <div>
            <h2 className="pl-4 pb-2 text-4xl font-bold">
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
            {/* <Button>Read more</Button> */}
          </div>
        </div>
        {/* <h2 className="pl-28 text-4xl font-semibold">
          {horsesForSalePost.fields.title2}
        </h2> */}

        <div className="flex justify-center items-center mt-28">
          {" "}
          <YoutubePlayer />
        </div>
        <h2 className="m-10 pl-28 text-4xl font-semibold">
          {horsesForSale.title2}
        </h2>
        <ImageGallery lang={params.lang} content={horsesForSaleContent[1]} />
      </section>
    </div>
  );
}
