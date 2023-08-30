"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramSection = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CvpJvkosBkY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
          width={328}
        />
      </div>
    </div>
  );
};

export default InstagramSection;
