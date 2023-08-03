import ButtonLg from '@/components/global-components/buttton-lg';
import React from 'react'

const ContactCta = () => {
  return (
    <section className="bg-gray-300 w-screen h-screen">
        <div className=" flex flex-col justify-center items-center bg-[url('/contact-cta.svg')] h-screen bg-contain bg-center bg-no-repeat mx-auto">
<div className="mx-80">
<h1 className="text-6xl">Get acquainted with our future equestrian sport stars</h1>
<p >All horses for sale - feel free to contact us!</p>
</div>
<ButtonLg>Contact</ButtonLg>
</div>
        </section>
  )
}

export default ContactCta;