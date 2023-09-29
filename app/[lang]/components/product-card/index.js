"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../main-page/mibile-card";
import BuyButton from "../global-components/buy-button";
import { addToCart } from "../../GlobalRedux/store";

const ProductCard = ({
  contentfulProduct,
  stripeProduct,
  exercises,
  isEven,
}) => {
  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(selectedCart));
  }, [selectedCart]);

  return (
    <div className={!isEven ? " bg-smartGray overflow-visible" : ""}>
      <div className="max-w-7xl py-28 mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
        <div className="max-w-md">
          <MobileCard
            img={contentfulProduct.fields.image.fields.file.url}
            hasOrangeBorder={!isEven}
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="p-4 pt-0">
            {/* {product.product.name} */}
            {contentfulProduct.fields.title}
          </h2>
          <h3 className="pl-4">
            {/* {product.product.description} */}
            {contentfulProduct.fields.subtitle}
          </h3>
          <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl">
            <div>
              {documentToReactComponents(contentfulProduct.fields.content)}
            </div>
          </div>
          <div className="pl-4 flex gap-12 items-center">
            <h3>
              {exercises.price} <span className="w-10" />
              <span className="text-smartOrange">
                {(stripeProduct[0].unit_amount / 100).toFixed(2) + " "}
                zł{" "}
              </span>
            </h3>
            <BuyButton
              exercises={exercises}
              onClick={() => {
                !selectedCart.some(
                  (product) => product.id === stripeProduct[0].id
                ) && dispatch(addToCart(stripeProduct[0]));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
