import React from "react";
import Button from "../global-components/buttton";

const PageHero = ({ title, titleSpan, content, buttonContent, img }) => {
  return (
    <section
      className=" bg-smartGray w-full  
      
      h-[calc(100vh-112px)]
     
    mb-28 flex flex-col xl:flex-row justify-between xl:overflow-hidden"
    >
      <div>
        <img
          src="/asset-about2bg.svg"
          alt="asset"
          className=" m-8-10 ml-auto w-32"
        />

        <div className="mx-6 my-6 flex flex-col gap-8 text-center">
          <h1>
            {title}
            <span className="text-smartOrange">{titleSpan}</span>
          </h1>
          <h3>{content}</h3>
          <Button className="mx-auto mt-2">{buttonContent}</Button>
        </div>
      </div>

      <img
        src={img}
        className="w-full xl:w-3/5 h-screen shrink-0 object-cover hidden xl:block"
      />
    </section>
  );
};

export default PageHero;
