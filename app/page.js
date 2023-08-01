import CartView from '@/components/CartView'
import AboutFirst from '@/components/main-page/about-first'
import AboutSecond from '@/components/main-page/about-second'
import ContactCta from '@/components/main-page/contact-cta'
import HeroSection from '@/components/main-page/hero-section'
import HorsesIntroSection from '@/components/main-page/horses-intro-section'
import MobileCard from '@/components/main-page/mibile-card'
import NewsSection from '@/components/main-page/news-section'
import NewsCard from '@/components/main-page/news-section/news-card'
import OfferSection from '@/components/main-page/offer-section'
import Modal from '@/components/modal'
import ProductCard from '@/components/product-card'
import TestimonialsCarousel from '@/components/testimonials'
import React from 'react'
import Stripe from 'stripe'


async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
    apiVersion: '2020-08-27'})
    const res = await stripe.prices.list({
      expand: ['data.product']
    })
    const prices = res.data
    return prices
}



export default async function Home() {
  const products = await getStripeProducts()

 return (
<main>
  
<div className="w-full h-full">

{/* <ul>
          {products.map((product, i) => (
            <li key={product.product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

<div>Cart</div>
<CartView/> */}
<HeroSection/>


{/* <TestimonialsCarousel/> */}
<NewsSection/>
{/* <HorsesIntroSection/> */}

<AboutFirst/>
<AboutSecond/>
<AboutFirst/>
<AboutFirst/>

<OfferSection/>
<ContactCta/>


{/* <div id="portal"></div> */}


      </div>
</main>
  )
}
