import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-gray-300 w-screen h-screen">
    <div className="relative  bg-[url('/hero-img.svg')] h-screen bg-contain bg-center bg-no-repeat mx-auto">
<div className="mx-96 absolute top-1/4">
<h1 className="text-6xl">Step into the world of graphics</h1>
<p>We create graphic materials for companies passionate about the equestrian world </p>

{/* horizontally centered button with the content: "Check my exercises" */}
<div className="flex justify-center">
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Check my exercises
    </button>
</div>



</div>

</div>
    </section>
  )
}

export default HeroSection;