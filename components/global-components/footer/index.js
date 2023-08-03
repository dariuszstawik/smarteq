"use client";
import React from 'react'
import Logo from '../logo';

const Footer = () => {
  return (
<section className="p-16 pt-28 w-3/4 flex items-center">
  <Logo />
  <div className="flex  ml-28">
    <img src="/fb-icon.svg" alt="facebook" className="w-10 h-10 mr-6" />
    <img src="/messenger-icon.svg" alt="messenger" className="w-10 h-10 mr-6" />
    <img src="/instagram-icon.svg" alt="instagram" className="w-10 h-10 mr-6" />
    <img src="/whatsapp-icon.svg" alt="whatsapp" className="w-10 h-10 mr-6" />
    <img src="/tiktok-icon.svg" alt="tiktok" className="w-10 h-10 mr-6" />
    <img src="/yb-icon.svg" alt="youtube" className="w-10 h-10 mr-6" />
    <img src="/linkedin-icon.svg" alt="linkedin" className="w-10 h-10" />
    
    </div>
</section>
  )
}

export default Footer;