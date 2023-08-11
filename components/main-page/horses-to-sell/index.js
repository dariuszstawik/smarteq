import Button from "@/components/global-components/buttton";
import React from "react";
import MobileCard from "../mibile-card";

const HorsesToSell = () => {
  return (
    <div className="w-full">
      <section className="container mx-auto">
        <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
          <MobileCard />

          <div>
            <h2 className="pl-4 pb-2 text-4xl font-bold">CARA MIA</h2>
            <h3 className="pl-4 text-2xl">6 y.o. mare for eventing</h3>
            <div className="bg-white p-4 rounded-2xl mt-4">
              <div>
                I pass on the ecquired knowledge and professional experience to
                younger and older riding students. I teach them how to approach
                equestrianism and what competition is all about. I pay attention
                to thinking while working with a horse and open their minds to
                the bigger picture of horse training. I pass on to my students
                techniques taken from the best German riders and trainers. My
                students reach good results at regional competitions and expand
                their level by taking horses into training or working with young
                horses.
              </div>
            </div>
            <Button>Read more</Button>
          </div>
        </div>
      </section>
    </div>

    // <section className="grid grid-cols-2 gap-6 mt-28 mx-28">
    //   <MobileCard />
    //   <div>
    //     <h2 className="text-4xl">CARA MIA</h2>
    //     <h3 className="text-2xl">6 y.o. mare for eventing</h3>
    //     <div className="white p-4 rounded-2xl">
    //       <p>
    //         I pass on the ecquired knowledge and professional experience to
    //         younger and older riding students. I teach them how to approach
    //         equestrianism and what competition is all about. I pay attention to
    //         thinking while working with a horse and open their minds to the
    //         bigger picture of horse training. I pass on to my students
    //         techniques taken from the best German riders and trainers. My
    //         students reach good results at regional competitions and expand
    //         their level by taking horses into training or working with young
    //         horses.
    //       </p>
    //     </div>
    //     <Button>Read more</Button>
    //   </div>
    // </section>
  );
};

export default HorsesToSell;
