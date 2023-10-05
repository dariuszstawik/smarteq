import { client } from "@/lib/contentful/client";
import { getDictionary } from "@/lib/dictionary";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/global-components/navbar";
import PageHeader from "../components/global-components/page-header";

async function getContentfulPrivacyPolicy(contentfulLang) {
  const resPrivacyPolicy = await client.getEntries(
    { content_type: "privacyPolicy", locale: contentfulLang },
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const privacyPolicy = resPrivacyPolicy.items[0].fields;

  return privacyPolicy;
}

export default async function PrivacyPolicy({ params: { lang } }) {
  const { navigation, privacyPolicy } = await getDictionary(lang);

  let contentfulLang;
  if (lang === "pl") {
    contentfulLang = "pl";
  } else {
    contentfulLang = "en-US";
  }

  const privacyPolicyContent = await getContentfulPrivacyPolicy(contentfulLang);

  console.log("privacyPolicyContent", { privacyPolicyContent });

  return (
    <div>
      <Navbar navigation={navigation} lang={lang} />
      <PageHeader>{privacyPolicy.title}</PageHeader>
      <div className="max-w-3xl mx-auto px-8 mt-10 mb-16">
        <h2 className="p-4 text-4xl font-semibold">
          {privacyPolicyContent.title}
        </h2>
        <div className="article text-base my-4">
          {documentToReactComponents(privacyPolicyContent.content)}
        </div>
      </div>
    </div>
  );
}
