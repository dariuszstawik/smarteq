import ButtonLg from '@/components/global-components/buttton-lg';
import React from 'react'

const OfferSection = () => {
  return (
    <section className="grid grid-cols-2 w-screen h-screen">
       <div className="relative  bg-[url('/offer-img.svg')] h-screen w-screen bg-contain bg-center bg-no-repeat mx-auto">
<div className="relative w-full h-full">
  <div className="inline-block absolute top-[55%] left-[32%]">
<ButtonLg isOrange>horses for sale</ButtonLg>
</div>
<div className="inline-block absolute top-[55%] right-[32%]">
<ButtonLg>view my exercises</ButtonLg>
</div>
</div>
</div>

    </section>
  )
}

export default OfferSection;