import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/global-components/navbar";
import PageHeader from "../components/global-components/page-header";

async function getContentfulTermsAndConditions(contentfulLang) {
  const resTermsAndConditions = await client.getEntries(
    { content_type: "termsAndConditions", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const termsAndConditions = resTermsAndConditions.items[0].fields;

  return termsAndConditions;
}

export default async function PrivacyPolicy({ params: { lang } }) {
  const { navigation, termsAndConditions } = await getDictionary(lang);

  let contentfulLang;
  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const termsAndConditionsContent = await getContentfulTermsAndConditions(
    contentfulLang
  );

  return (
    <div>
      <Navbar navigation={navigation} lang={lang} />
      <PageHeader>{termsAndConditions.title}</PageHeader>
      <div className="max-w-3xl mx-auto px-8 mt-10 mb-16">
        <h2 className="p-4 text-4xl font-semibold">
          {termsAndConditionsContent.title}
        </h2>
        <div className="article text-base my-4">
          {documentToReactComponents(termsAndConditionsContent.content)}
        </div>
      </div>
    </div>
  );
}
