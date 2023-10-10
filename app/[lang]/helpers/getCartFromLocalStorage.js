// export const getCartFromLocalStorage = () => {
//   return typeof window !== "undefined" &&
//     JSON.parse(localStorage.getItem("cart"))
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];
// };

// import { useEffect } from "react";

// let cartFromLocalStorage = [];

// useEffect(() => {
//   const cartFromLocalStorage = localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];
// }, []);

// export default cartFromLocalStorage;

export const getCartFromLocalStorage = () => {
  return typeof localStorage !== "undefined" &&
    JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};
