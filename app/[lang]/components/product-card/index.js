"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../main-page/mibile-card";
import BuyButton from "../global-components/buy-button";
import { addToCart, increaseCartItemAmount } from "../../GlobalRedux/store";

const ProductCard = ({
  contentfulProduct,
  stripeProduct,
  exercises,
  isEven,
  lang,
}) => {
  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart);

  const [productAmount, setProductAmount] = useState(1);

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

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
          <h2 className="p-4 pt-0">{contentfulProduct.fields.title}</h2>
          <h3 className="pl-4">{contentfulProduct.fields.subtitle}</h3>
          <div className="bg-white px-4 py-1 mt-2 pl-4 rounded-2xl">
            <div>
              {documentToReactComponents(contentfulProduct.fields.content)}
            </div>
          </div>
          <div className="pl-4 flex flex-wrap gap-6 items-center justify-center">
            <h3>
              {exercises.price} <span className="w-10" />
              <span className="text-smartOrange">
                {(stripeProduct[0].unit_amount / 100).toFixed(2) + " "}
                zł{" "}
              </span>
            </h3>

            <div className="text-lg lg:text-xl">
              <span
                className="px-4 cursor-pointer"
                onClick={() =>
                  productAmount > 1 && setProductAmount(productAmount - 1)
                }
              >
                -
              </span>
              {productAmount} {lang === "pl" ? "szt." : "pcs."}
              <span
                className="px-4 cursor-pointer"
                onClick={() => setProductAmount(productAmount + 1)}
              >
                +
              </span>
            </div>

            <BuyButton
              type="submit"
              exercises={exercises}
              onClick={() => {
                !selectedCart.some(
                  (product) => product.product.id === stripeProduct[0].id
                )
                  ? dispatch(
                      addToCart({
                        product: stripeProduct[0],
                        amount: productAmount,
                      })
                    )
                  : // : setShowNotification(true);
                    dispatch(
                      increaseCartItemAmount({
                        product: stripeProduct[0],
                        amount: productAmount,
                      })
                    );
              }}
            />
          </div>
          {/* {showNotification && (
            <div className="text-smartOrange text-2xl p-2 rounded">
              {exercises.alreadyInCart}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
