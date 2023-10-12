"use client";
import Link from "next/link";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({ lang, content }) {
  // const [index, setIndex] = useState(0);

  const images = content
    ? content.map((horse) => ({
        src: `https:${horse?.fields?.image?.fields.file.url}`,
        width: horse?.fields?.image?.fields.file.details.image.width,
        height: horse?.fields?.image?.fields.file.details.image.height,
        slug: horse?.fields?.slug,
      }))
    : [];

  return (
    <div className="max-w-6xl mx-8 lg:mx-auto">
      <PhotoAlbum
        layout="rows"
        photos={images}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <Link
            href={`/${lang}/horse-for-sale/${photo.slug}`}
            style={wrapperStyle}
            // target="_blank"
            rel="noreferrer noopener"
          >
            {renderDefaultPhoto({ wrapped: true })}
          </Link>
        )}
      />
    </div>
  );
}
