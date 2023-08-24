"use client";
import { clearCart, removeFromCart } from "@/app/GlobalRedux/store";
import { useRouter } from "next/navigation";
import React from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const CartView = () => {
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
    const res = await fetch("/api/checkout", {
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
    <div className="max-w-3xl mx-auto">
      {selectedCart.length === 0 ? (
        <h2 className="mx-auto my-12">Cart is empty</h2>
      ) : (
        <>
          <h2 className="mx-auto my-12">Cart</h2>

          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {selectedCart.map((item) => (
                <tr key={item.product.id}>
                  <td className="border px-4 py-2">{item.product.name}</td>
                  <td className="border px-4 py-2">
                    {item.unit_amount / 100} zł
                  </td>
                  <td className="border px-4 py-2">
                    <button onClick={() => dispatch(removeFromCart(item))}>
                      remove item
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2">Total price</td>
                <td className="border px-4 py-2">
                  {selectedCart.reduce((acc, item) => {
                    return acc + item.unit_amount / 100;
                  }, 0)}{" "}
                  zł
                </td>
                <td className="border px-4 py-2">
                  <button onClick={() => dispatch(clearCart())}>
                    clear cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            onClick={checkout}
            className="border border-solid border-slate-700 text-xl m-4 p-6 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
          >
            Checkout
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
