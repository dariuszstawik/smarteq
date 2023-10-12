"use client";
import Image from "next/image";
import React from "react";

const MobileCard = ({ img, graphicImgClassName, hasOrangeBorder }) => {
  return (
    <div className="relative">
      {hasOrangeBorder && (
        <div className="absolute left-7 top-7 w-[260px] h-[410px] bg-smartOrange border rounded-[10%]"></div>
      )}
      <div className="relative w-[260px] h-[410px] bg-white text-white border rounded-[10%]">
        {img && (
          <img
            src={img}
            alt="horse"
            className={`min-w-full min-h-full object-cover rounded-[10%] ${graphicImgClassName}`}
          />
        )}
      </div>
    </div>
  );
};

export default MobileCard;
