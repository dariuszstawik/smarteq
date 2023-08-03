"use client";
import HorsesToSell from "@/components/main-page/horses-to-sell";
import React from "react";
import ReactPlayer from "react-player/youtube";

const page = () => {
  return (
    <div>
      <HorsesToSell />
      <div className="flex justify-center items-center mt-28">
        <ReactPlayer url="https://https://www.youtube.com/watch?v=vof1ZpQHeEs" />
      </div>
    </div>
  );
};

export default page;
