"use client";
import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Inline } from "yet-another-react-lightbox/plugins";

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

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = React.useState(false);

  //   const images = photos.map((image) => ({
  //     src: `https:${image.fields.file.url}`,
  //     width: image.fields.file.details.image.width,
  //     height: image.fields.file.details.image.height,
  //   }));

  const toggleOpen = (state) => () => setOpen(state);

  const updateIndex = ({ index: current }) => setIndex(current);

  return (
    <div className="m-28">
      <Lightbox
        index={index}
        slides={photos}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={photos}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </div>
  );
}
