"use client";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialProductsState = [
    {
    productsList: [],
    selectedProduct: "",
},
];

const productsSlice = createSlice({
    name: "products",
    initialState: initialProductsState,
    reducers: {
        selectProduct(state, action) {
            state.selectedProduct = action.payload;
        },
    },
});

export const {selectProduct} = productsSlice.actions;

const initialCartState = []; 

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeFromCart(state, action) {
return state.filter((item) => item.product.id !== action.payload.product.id);
        }

    }
});

export const {addToCart, removeFromCart} = cartSlice.actions;


const initialIsModalOpenState = false;

const modalSlice = createSlice({
    name: "modal",
    initialState: initialIsModalOpenState,
    reducers: {
        openModal(state) {
            state = true;
        },
        closeModal(state) {
            state = false;
        },

        toggleModal(state) {
            state = !state;
        },
    }
});

export const {openModal, closeModal} = modalSlice.actions;

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productsSlice.reducer,
        modal: modalSlice.reducer,
    },
});

export default store;
