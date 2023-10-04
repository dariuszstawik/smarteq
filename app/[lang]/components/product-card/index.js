"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../main-page/mibile-card";
import BuyButton from "../global-components/buy-button";
import { addToCart } from "../../GlobalRedux/store";
import ProductAmount from "../global-components/product-amount";
import { productionBrowserSourceMaps } from "@/next.config";

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(selectedCart));
  }, [selectedCart]);

  return (
    <div className={!isEven ? " bg-smartGray overflow-visible" : ""}>
      <div className="max-w-7xl py-28 mx-auto px-8 flex flex-col lg:flex-row justify-center gap-8 lg:gap-28">
        {/* <form> */}
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
          <div className="pl-4 flex gap-6 items-center justify-center">
            <h3>
              {exercises.price} <span className="w-10" />
              <span className="text-smartOrange">
                {(stripeProduct[0].unit_amount / 100).toFixed(2) + " "}
                zł{" "}
              </span>
            </h3>
            {/* <ProductAmount /> */}
            {/* <input
              className="w-12 m-0 px-2 py-4 text-center md:text-right border-2 border-black focus:ring-transparent focus:outline-none rounded-md bg-transparent"
              type="number"
              placeholder="1"
              id="productAmount"
            >
              {productAmount}
            </input> */}

            <div className="text-xl">
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
              // onClick={() => {
              //   () => {
              //     productAmount.forEach((amount) => {
              //       !selectedCart.some(
              //         (product) => product.id === stripeProduct[0].id
              //       ) &&
              //       dispatch(addToCart(stripeProduct[0]));
              //     });
              //   };
              // }}
              onClick={() => {
                !selectedCart.some(
                  (product) => product.id === stripeProduct[0].id
                )
                  ? dispatch(
                      addToCart({
                        product: stripeProduct[0],
                        amount: productAmount,
                      })
                    )
                  : (selectedCart.find(
                      (product) => product.id === stripeProduct[0].id
                    ).amount += productAmount);
              }}
            />
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default ProductCard;
