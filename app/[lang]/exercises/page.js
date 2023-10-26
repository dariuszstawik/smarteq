import React from "react";
import ExercisesHeader from "../components/exercises-page/exercises-header";
import ItemsToBuy from "../components/exercises-page/items-to-buy";
import { getDictionary } from "@/lib/dictionary";
import Navbar from "../components/global-components/navbar";
import Head from "next/head";

export default async function page({ params: { lang } }) {
  const { navigation, exercises } = await getDictionary(lang);
  return (
    <>
      <Head>
        <title>{exercises.title}</title>
        <meta name="description" content={exercises.description} />
      </Head>
      <div>
        <Navbar navigation={navigation} lang={lang} />
        <ExercisesHeader lang={lang} />
        <ItemsToBuy lang={lang} />
      </div>
    </>
  );
}
