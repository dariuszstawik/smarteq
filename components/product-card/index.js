"use client";
import { addToCart } from "@/app/GlobalRedux/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal";
import MobileCard from "../main-page/mibile-card";
import BuyButton from "../global-components/buy-button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProductCard = ({ product, productContent }) => {
  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart);
  // console.log(selectedCart);
  // console.log(selectedCart.indexOf(product.product.id));
  // console.log(product.product);
  console.log("------------------ product card ------------------");
  console.log(product);
  console.log(productContent);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(selectedCart));
  }, [selectedCart]);

  return (
    <div>
      <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
        <MobileCard />

        <div>
          <h2 className="pl-4 pb-2 text-4xl font-bold">
            {product.product.name}
          </h2>
          <h3 className="pl-4 text-2xl">{product.product.description}</h3>
          <div className="bg-white p-4 rounded-2xl mt-4">
            <div>
              {/* I pass on the ecquired knowledge and professional experience to
              younger and older riding students. I teach them how to approach
              equestrianism and what competition is all about. I pay attention
              to thinking while working with a horse and open their minds to the
              bigger picture of horse training. I pass on to my students
              techniques taken from the best German riders and trainers. My
              students reach good results at regional competitions and expand
              their level by taking horses into training or working with young
              horses. */}
              {documentToReactComponents(productContent[0].fields.content)}
            </div>
          </div>
          <BuyButton
            onClick={() =>
              selectedCart.indexOf(product) === -1 &&
              dispatch(addToCart(product))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
