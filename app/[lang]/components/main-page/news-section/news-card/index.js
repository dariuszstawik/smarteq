import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardButton from "../../../global-components/card-button";
import { getDictionary } from "@/lib/dictionary";

export default async function NewsCard({ lang, title, lead, slug, img }) {
  const { blogSection } = await getDictionary(lang);

  return (
    <div className="  max-w-screen sm:w-96 h-[540px] rounded-lg shadow-lg flex flex-col">
      <Image
        className="w-contain rounded-t-lg h-[45%] object-cover"
        src={img ? `https:${img.fields.file.url}` : ""}
        width={img?.fields?.file?.details?.image?.width}
        height={img?.fields?.file?.details?.image?.height}
        alt={img?.fields?.description ? img.fields.description : ""}
      />
      <div className="p-4 flex flex-col grow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {lead.length > 160 ? lead.slice(0, 160) + "..." : lead}
        </p>
        <CardButton className="w-1/3 ml-auto mt-auto">
          <Link href={`/${lang}/blog/${slug}`}>{blogSection.button}</Link>
        </CardButton>
      </div>
    </div>
  );
}
