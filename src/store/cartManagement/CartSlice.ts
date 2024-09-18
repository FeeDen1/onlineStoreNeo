import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../models/IItem";
import { cartState } from "./types";

const initialState: cartState = {
    products: [],
    singleProduct: {} as IItem,
    numberOfProducts: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IItem>) {
            const newItem = action.payload;
            const index = state.products.findIndex(cartEntry => cartEntry.id === newItem.id);
            if (index !== -1) {
                state.products[index].quantity++;
            } else {
                const newProduct = { ...newItem, quantity: 1 };
                state.products.push(newProduct);
            }
            state.numberOfProducts++;
        },
        deleteAllCart(state) {
            state.products = [];
            state.numberOfProducts = 0;
        },
        deleteOneItem(state, action: PayloadAction<IItem>) {
            const itemToDelete = action.payload;
            const index = state.products.findIndex(item => item.id === itemToDelete.id);
            if (index !== -1) {
                state.numberOfProducts--;
                state.products[index].quantity--;

                if (state.products[index].quantity === 0) {
                    state.products.splice(index, 1);
                }
            }
        },
        deleteWholeItem(state, action: PayloadAction<IItem>) {
            const itemToDelete = action.payload;
            const index = state.products.findIndex(item => item.id === itemToDelete.id);
            if (index !== -1) {
                const updatedProduct = state.products[index];
                state.numberOfProducts -= updatedProduct.quantity;
                state.products.splice(index, 1);
            }
        }
    }
});

export const { addToCart, deleteAllCart, deleteOneItem, deleteWholeItem } = CartSlice.actions;
export default CartSlice.reducer;