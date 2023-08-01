import ButtonLg from '@/components/global-components/buttton-lg';
import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-gray-300 w-screen h-screen mb-28">
    <div className="relative  bg-[url('/hero-img.svg')] h-screen bg-contain bg-center bg-no-repeat mx-auto">
<div className="mx-72 absolute top-1/4 2xl:mx-96">
<h1 className="text-6xl ml-6 mb-2">Step into the world of graphics</h1>
<p className="ml-6">We create graphic materials for companies passionate about the equestrian world </p>

<div className="flex justify-center">
    <ButtonLg>Check my exercises</ButtonLg>
</div>



</div>

</div>
    </section>
  )
}

export default HeroSection;