"use client";
import Link from "next/link";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  { src: "/horse1.jpg", width: 1200, height: 800 },
  { src: "/horse2.jpg", width: 1200, height: 796 },
  { src: "/horse3.jpg", width: 1200, height: 823 },
  { src: "/horse4.jpg", width: 1200, height: 800 },
  { src: "/horse5.jpg", width: 1200, height: 800 },
  { src: "/horse6.jpg", width: 1200, height: 800 },
  { src: "/horse7.jpg", width: 1200, height: 801 },
  { src: "/horse8.jpg", width: 1200, height: 718 },
  { src: "/horse9.jpg", width: 1200, height: 800 },
  { src: "/horse10.jpg", width: 1200, height: 798 },
  { src: "/horse11.jpg", width: 1200, height: 800 },
  { src: "/horse12.jpg", width: 1200, height: 789 },
  { src: "/horse13.jpg", width: 1200, height: 800 },
  { src: "/horse14.jpg", width: 1200, height: 800 },
  { src: "/horse15.jpg", width: 1200, height: 796 },
  { src: "/horse16.jpg", width: 1200, height: 801 },
];

export default function ImageGallery({ lang, content }) {
  const [index, setIndex] = useState(0);

  console.log("-------- horses for sale 123456--------");
  console.log(content);

  const images = content
    ? content.map((horse) => ({
        src: `/https:${horse?.fields?.image?.fields.file.url}`,
        // src: horse?.fields?.image?.fields.file.url,
        width: horse?.fields?.image?.fields.file.details.image.width,
        height: horse?.fields?.image?.fields.file.details.image.height,
        slug: horse?.fields?.slug,
      }))
    : [];

  console.log("---------images---------");
  console.log(images[0]);

  return (
    <div className="max-w-6xl mx-auto">
      <PhotoAlbum
        layout="rows"
        photos={images}
        // onClick={({ index: current }) => setIndex(current)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <Link
            href={`/${lang}/horse-for-sale/${photo.slug}`}
            style={wrapperStyle}
            target="_blank"
            rel="noreferrer noopener"
          >
            {renderDefaultPhoto({ wrapped: true })}
          </Link>
        )}
      />

      {/* <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      /> */}
    </div>
  );
}
