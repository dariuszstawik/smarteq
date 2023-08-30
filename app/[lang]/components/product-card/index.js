"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MobileCard from "../main-page/mibile-card";
import BuyButton from "../global-components/buy-button";
import { addToCart } from "../../GlobalRedux/store";

const ProductCard = ({ contentfulProduct, stripeProduct, lang }) => {
  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(selectedCart));
  }, [selectedCart]);

  return (
    <div>
      <div className="max-w-[1200px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-[1fr,2fr] gap-12 mt-28 py-28 mx-auto">
        <MobileCard img={contentfulProduct.fields.image.fields.file.url} />

        <div>
          <h2 className="pl-4 pb-2 text-4xl font-bold">
            {/* {product.product.name} */}
            {contentfulProduct.fields.title}
          </h2>
          <h3 className="pl-4 text-2xl">
            {/* {product.product.description} */}
            {contentfulProduct.fields.subtitle}
          </h3>
          <div className="bg-white p-4 rounded-2xl mt-4">
            <div>
              {documentToReactComponents(contentfulProduct.fields.content)}
            </div>
          </div>
          <div className="p-4 flex gap-12 items-center">
            <h2>
              Price: <span className="w-10" />
              <span className="text-smartOrange">
                {(stripeProduct[0].unit_amount / 100).toFixed(2) + " "}
                zł{" "}
              </span>
            </h2>
            <BuyButton
              onClick={() =>
                selectedCart.indexOf(stripeProduct) === -1 &&
                dispatch(addToCart(stripeProduct[0]))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
