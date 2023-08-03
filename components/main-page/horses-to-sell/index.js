import ButtonLg from "@/components/global-components/buttton-lg";
import React from "react";
import MobileCard from "../mibile-card";

const HorsesToSell = () => {
  return (
    <section className="grid grid-cols-2 gap-6 mt-28 mx-28">
      <MobileCard />
      <div>
        <h2 className="text-4xl">CARA MIA</h2>
        <h3 className="text-2xl">6 y.o. mare for eventing</h3>
        <div className="white p-4 rounded-2xl">
          <p>
            I pass on the ecquired knowledge and professional experience to
            younger and older riding students. I teach them how to approach
            equestrianism and what competition is all about. I pay attention to
            thinking while working with a horse and open their minds to the
            bigger picture of horse training. I pass on to my students
            techniques taken from the best German riders and trainers. My
            students reach good results at regional competitions and expand
            their level by taking horses into training or working with young
            horses.
          </p>
        </div>
        <ButtonLg>Read more</ButtonLg>
      </div>
    </section>
  );
};

export default HorsesToSell;
