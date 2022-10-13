import React, { useReducer } from "react";
import CartContext from "./cart-context";
const defaultState = {
  items: [],
  totalAmount: 0
};
function cartReducer(state, action) {
  if (action.type === "ADD") {
    let updatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.value.amount * action.value.price;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const existingItem = state.items[existingIndex];
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    if (!existingItem) {
      return;
    } else {
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems = state.items;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
    }
  }
  return defaultState;
}
export default function CartProvider(props) {
  const [cartState, cartStateDispach] = useReducer(cartReducer, defaultState);
  function addItemHandler(item) {
    cartStateDispach({
      type: "ADD",
      value: item
    });
  }
  function removeItemHandler(id) {
    cartStateDispach({
      type: "REMOVE",
      id: id
    });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
