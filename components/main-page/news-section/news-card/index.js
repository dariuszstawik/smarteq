"use client";
import CardButton from "@/components/global-components/card-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ title, lead, slug, img }) => {
  console.log(img);
  return (
    <div className="w-96 rounded-lg shadow-lg">
      <Image
        className="w-contain rounded-t-lg"
        src={img ? `https:${img.fields.file.url}` : ""}
        width={img?.fields?.file?.details?.image?.width}
        height={img?.fields?.file?.details?.image?.height}
        alt={img?.fields?.description ? img.fields.description : ""}
      />
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {lead.length > 160 ? lead.slice(0, 160) + "..." : lead}
        </p>
        <CardButton className="w-1/3 ml-auto">
          <Link href={`/blog/${slug}`}>Read more</Link>
        </CardButton>
      </div>
    </div>
  );
};

export default NewsCard;
