"use client";
import { removeFromCart } from '@/app/GlobalRedux/store';
import { useRouter } from 'next/navigation';
import React from 'react'
import ReactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';

const CartView = () => {
    const selectedCart = useSelector((state) => state.cart); 
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);
    console.log('CART ITEMS: ', cartItems);

    const router = useRouter()

    async function checkout() {
      const lineItems = cartItems.map(cartItem => {

          return {
              price: cartItem.id,
              quantity: 1
          }
      })
      const res = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ lineItems })
      })
      const data = await res.json()
      router.push(data.session.url)
  }

  return (
<ul>
   {selectedCart.map((item) => (
       <li key={item.product.id}>{item.product.name} <button onClick={()=> dispatch(removeFromCart(item)) }>delete item</button></li>
    ))} 
     <div onClick={checkout} className='border border-solid border-slate-700 text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer'>Checkout</div>

</ul>
  )
}

export default CartView;