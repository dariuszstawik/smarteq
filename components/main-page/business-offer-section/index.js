import ButtonLg from '@/components/global-components/buttton-lg';
import React from 'react'

const BusinessOfferSection = () => {
  return (
<section className="w-screen flex justify-center mt-28">
<div className="grid grid-cols-2 gap-10 mx-28">
<div className="flex flex-col justify-center items-center">
    <img src="/business-offer.svg" className="h-[393px]" alt="business offer"/>
    <ButtonLg>Business offer</ButtonLg>
</div>
<div className="flex flex-col justify-center items-center">
    <img src="/exercises.svg" className="h-[393px]" alt="view my exercises"/>
    <ButtonLg>View my exercises</ButtonLg>
</div>

</div>
</section>
  )
}

export default BusinessOfferSection;