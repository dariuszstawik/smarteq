"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../GlobalRedux/store";
import ProductAmount from "../global-components/product-amount";

const CartView = ({ lang }) => {
  const selectedCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  console.log("CART ITEMS: ", cartItems);

  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.id,
        quantity: 1,
      };
    });
    const res = await fetch("./api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }

  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:p-20 bg-white">
          {selectedCart.length === 0 ? (
            <h2 className="mx-auto my-12">
              {lang === "pl" ? "Koszyk jest pusty" : "Your cart is empty"}{" "}
            </h2>
          ) : (
            <ul>
              {selectedCart.map((item) => {
                return (
                  <li key={item.product.id}>
                    <div className="mb-8 pb-4 border-b">
                      <div className="w-full flex justify-between">
                        <h3 className="mb-2 text-xl font-bold font-heading">
                          {lang === "pl"
                            ? item.product.description
                            : item.product.name}
                        </h3>
                        <ProductAmount />
                      </div>
                      <div className="flex w-full lg:w-auto justify-between items-center">
                        <button onClick={() => dispatch(removeFromCart(item))}>
                          {lang === "pl" ? "usuń" : "remove"}
                        </button>
                        <p className="text-right text-lg font-bold font-heading text-smartOrange">
                          {(item.unit_amount / 100).toFixed(2)} zł
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex flex-wrap mb-10 items-center justify-between py-6 mx-4 md:mx-10 gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl text-smartOrange font-bold font-heading">
                {lang === "pl" ? "Suma" : "Total price"}
              </h3>
            </div>
            <span className="text-xl text-smartOrange font-bold font-heading">
              {selectedCart.reduce((acc, item) => {
                return acc + item.unit_amount / 100;
              }, 0)}{" "}
              zł
            </span>
            <p>
              {lang === "pl"
                ? "Po opłaceniu zamówienia w ciągu 48 godzin otrzymasz e-maila z zamówionymi e-bookami."
                : "After purchasing, you will receive an e-mail with your order within 24 hours."}
            </p>
          </div>
          <div className="text-right mx-10 flex justify-between">
            <a
              className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-4 px-8 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading uppercase rounded-md transition duration-200"
              href="#"
              onClick={() => dispatch(clearCart())}
            >
              {lang === "pl" ? "Wyczyść koszyk" : "Clear cart"}
            </a>
            <button
              className="inline-block w-full md:w-auto py-4 px-8 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
              // href="#"
              onClick={checkout}
            >
              {lang === "pl" ? "zamów" : "Checkout"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartView;
