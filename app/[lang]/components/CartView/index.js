"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseCartItemAmount,
  increaseCartItemAmount,
  removeFromCart,
} from "../../GlobalRedux/store";
import Link from "next/link";

const CartView = ({ lang }) => {
  const selectedCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [isAgreed, setIsAgreed] = useState(false);

  const router = useRouter();

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.product.id,
        quantity: cartItem.amount,
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
                  <li key={item.product.product.id}>
                    <div className="mb-8 pb-4 border-b">
                      <div className="w-full flex justify-between items-center">
                        <h3 className="mb-2 text-xl font-bold font-heading w-2/3">
                          {lang === "pl"
                            ? item.product.product.description
                            : item.product.product.name}
                        </h3>
                        <div>
                          <span
                            className="px-4 cursor-pointer"
                            onClick={() => {
                              dispatch(decreaseCartItemAmount(item.product.id));
                            }}
                          >
                            -
                          </span>
                          {item.amount} {lang === "pl" ? "szt." : "pcs."}
                          <span
                            className="pl-4 cursor-pointer"
                            onClick={() => {
                              console.log("item.product", item.product);
                              dispatch(increaseCartItemAmount(item.product.id));
                            }}
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full lg:w-auto justify-between items-center">
                        <button onClick={() => dispatch(removeFromCart(item))}>
                          {lang === "pl"
                            ? "usuń z koszyka"
                            : "remove from cart"}
                        </button>
                        <p className="text-right text-lg font-bold font-heading text-smartOrange">
                          {(
                            (item.product.unit_amount / 100) *
                            item.amount
                          ).toFixed(2)}{" "}
                          zł
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex flex-wrap items-center justify-between py-6  gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl text-smartOrange font-bold font-heading">
                {lang === "pl" ? "Suma" : "Total price"}
              </h3>
            </div>
            <span className="text-xl text-smartOrange font-bold font-heading">
              {selectedCart.reduce((acc, item) => {
                return acc + (item.product.unit_amount / 100) * item.amount;
              }, 0)}{" "}
              zł
            </span>
            <p>
              {lang === "pl"
                ? "Po opłaceniu zamówienia otrzymasz swoje produkty przesyłką kurierską do 14 dni roboczych."
                : "After paying for your order, you will receive your products by courier service up to 14 business days."}
            </p>
          </div>
          <hr className="w-1/2 my-6" />
          <div className="flex justify-start items-start mb-10">
            <input
              type="checkbox"
              id="privacyTermsCheckbox"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              className="mr-2"
            />
            <label
              htmlFor="privacyTermsCheckbox"
              className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
            >
              {lang === "pl" ? (
                <>
                  Zgadzam się na przetwarzanie danych osobowych w celu
                  realizacji zamówienia. Akceptuję{" "}
                  <Link href={`/${lang}/privacyPolicy`}>
                    politykę prywatności
                  </Link>{" "}
                  i{" "}
                  <Link href={`/${lang}/terms-and-conditions`}>
                    Regulamin sklepu Smart Equestrian.
                  </Link>
                </>
              ) : (
                <>
                  I agree to the processing of personal data for the purpose of
                  processing the order. I accept{" "}
                  <Link href={`/${lang}/privacyPolicy`}>
                    the privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link href={`/${lang}/terms-and-conditions`}>
                    Terms and Conditions of Smart Equestrian store
                  </Link>
                  .
                </>
              )}
            </label>
          </div>
          <div className="text-right mx-10 flex justify-between">
            <a
              className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-4 px-8 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading uppercase rounded-md transition duration-200"
              href="#"
              onClick={() => dispatch(clearCart())}
            >
              {lang === "pl" ? "Wyczyść koszyk" : "Clear cart"}
            </a>
            {/* <button
              className="inline-block w-full md:w-auto py-4 px-8 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
              onClick={checkout}
            >
              {lang === "pl" ? "zamów" : "Checkout"}
            </button> */}

            <button
              className={`inline-block w-full md:w-auto py-4 px-8 ${
                isAgreed
                  ? "bg-orange-300 hover:bg-orange-400"
                  : "bg-gray-300 cursor-not-allowed"
              } text-center text-white font-bold font-heading uppercase rounded-md transition duration-200`}
              onClick={checkout}
              disabled={!isAgreed}
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
