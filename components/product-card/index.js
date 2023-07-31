"use client";
import { addToCart } from '@/app/GlobalRedux/store';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../modal';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const selectedCart = useSelector((state) => state.cart); 
    console.log(selectedCart)
    console.log(selectedCart.indexOf(product.product.id))

  return (

    <div> {product.product.name}
    <button onClick = {() => (selectedCart.indexOf(product)) === -1 && dispatch(addToCart(product))}>add to cart</button>
    
    {/* <Modal/> */}
    </div>

  )
}

export default ProductCard;