"use client";
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

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  //   const images = photos.map((image) => ({
  //     src: `https:${image.fields.file.url}`,
  //     width: image.fields.file.details.image.width,
  //     height: image.fields.file.details.image.height,
  //   }));

  return (
    <div className="m-28">
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
